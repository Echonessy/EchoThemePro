<template>
  <p class="vHeader vBgColor">{{title}}</p>
</template>

<script>
    export default {
        data () {
            return {
                title:""
            }
        },
        created(){
            this.watchBus()
        },
        mounted(){

        },
        methods: {
          watchBus(){
            let that = this;
            this.$bus.$on('headerBus', function(params){
                if(params) that.title = params;
            })
          }
        },
        beforeDestroy () {
          this.$bus.$off('headerBus');
        }
    }
</script>

<style>
  .vHeader{width: 100%;box-sizing: border-box;height: .4rem;text-align: center;font-size: .15rem; line-height: .4rem;color: white;}
</style>
