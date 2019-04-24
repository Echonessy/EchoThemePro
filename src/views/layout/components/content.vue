<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </transition>
</template>

<script>
    export default {
        data () {
            return {}
        },
        mounted(){

        },
        methods: {}
    }
</script>

<style>

</style>
