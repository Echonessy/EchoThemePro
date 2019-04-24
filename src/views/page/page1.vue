<template>
  <div>
    <div class="vColor test">这是测试路由1</div>
  </div>

</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted(){
            this.reqTest();
        },
        methods: {
            reqTest(){
              let url = '/api/home/hotVideo.json'
              let reqData = {}
              reqData.cpid = 0;
              reqData.type = 'film';
              this.$vhttp.get(url,reqData,(res) =>{
                  console.log(res)
              })
            }
        },
    }
</script>

<style scoped="" lang="scss">
  .test{font-size: .15rem;text-align: center;line-height: .4rem;}
</style>

