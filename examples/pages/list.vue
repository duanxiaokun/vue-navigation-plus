<template>
  <page>
    <div class="list">
      <p>This is the <b>list</b> page</p>
      <p>random number: {{random}}</p>
      <p v-for="n in 30" :key="n">
        <span style="text-decoration:underline; color:red;" @click="goDetail(n)">go to detail page(id: {{n}})</span>
      </p>
    </div>
  </page>
</template>

<script>
  import Page from '../components/Page.vue'

  export default {
    name: 'list',
    components: {Page},
    data() {
      return {
        random: Math.random().toFixed(4)
      }
    },
    activated() {
      // console.log('list activated')
    },
    deactivated() {
      // console.log('list deactivated')
    },
    methods: {
      goDetail(id) {
        this.$router.push({path: `/list/${id}`})
      }
    }
  }
</script>
