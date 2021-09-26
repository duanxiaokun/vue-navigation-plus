const isFunction = (val) => typeof val === 'function';
const normalizeKey = ({ key }) => key != null ? key : null;
const isArray = Array.isArray;
const isString = (val) => typeof val === 'string';

export function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

export function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 /* SUSPENSE */ ? vnode.ssContent : vnode;
}

export function getComponentName(Component) {
  return isFunction(Component)
      ? Component.displayName || Component.name
      : Component.name;
}

export const isAsyncWrapper = (i) => !!i.type.__asyncLoader;

function cloneVNode(vnode) {
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  const { props, ref, patchFlag, children } = vnode;
  const mergedProps = props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 /* HOISTED */ && isArray(children)
        ? children.map(deepCloneVNode)
        : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: perserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}

/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}

export const _cloneVNode = cloneVNode

export function genKey() {
  // const t  = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  const t = 'xxxxxxxx'
  return t.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export function getKey(route, keyName) {
  return `${route.name || route.path}?${route.query[keyName]}`
}

export function isObjEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }
  else {
    const keys1 = Object.getOwnPropertyNames(obj1)
    const keys2 = Object.getOwnPropertyNames(obj2)
    if (keys1.length !== keys2.length) {
      return false
    }
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
    return true
  }
}

export function resetShapeFlag(vnode) {
  let shapeFlag = vnode.shapeFlag;
  if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
    shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
  }
  if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
    shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */;
  }
  vnode.shapeFlag = shapeFlag;
}

export function matches(pattern, name) {
  if (isArray(pattern)) {
    return pattern.some((p) => matches(p, name));
  }
  else if (isString(pattern)) {
    return pattern.split(',').indexOf(name) > -1;
  }
  else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

export function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128 /* SUSPENSE */) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}