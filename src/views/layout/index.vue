<template>
  <div class="layOut">
    <v-header></v-header>
    <v-content></v-content>
    <v-theme></v-theme>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import { vMenu, vHeader, vContent } from './index'
  export default {
    components: {
      vMenu,vHeader,vContent,
      vTheme: () => import('@/components/theme')
    },
    data() {
      return{}
    },
    mounted(){
      this.initTheme();
    },
    methods:{
      initTheme(){
        window.document.documentElement.setAttribute('v-theme', 'theme');
        this.$bus.$emit('headerBus','默认主题');
      }
    }
  };
</script>

<style>
  .layOut{overflow: hidden;clear: both;}
</style>
