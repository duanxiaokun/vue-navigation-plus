import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

module.exports = [
    {
        // 入口
        input: "src/index.js",
        // 出口
        output: [
            {
                file: "dist/vue-navigation-plus.esm.js",
                format: "es",
            },
            {
                name: "VueNavigationPlus",
                file: "dist/vue-navigation-plus.umd.js",
                format: "umd",
            },
        ],
        // 插件
        plugins: [
            vue({
                // 把单文件组件中的样式，插入到html中的style标签
                css: true,
                // 把组件转换成 render 函数
                compileTemplate: true,
            }),
            // 代码压缩
            // terser(),
            postcss(),
        ],
    },
];