<template>
  <div class="themeBox">
    <p @click="changeTheme(m.theme,m.name)" v-for="(m,index) in themeList">{{m.name}}</p>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                themeList:[
                  {'name':"默认主题",'theme':"theme"},
                  {'name':"主题1",'theme':"theme1"},
                  {'name':"主题2",'theme':"theme2"},
                  {'name':"主题3",'theme':"theme3"},
                  {'name':"主题4",'theme':"theme4"},
                  {'name':"主题5",'theme':"theme5"},
                ]
            }
        },
        mounted(){

        },
        methods: {
          changeTheme (theme,name) {
            window.document.documentElement.setAttribute('v-theme', theme);
            this.$bus.$emit('headerBus',name);
          }
        }
    }
</script>

<style lang="scss">
  .themeBox{overflow: hidden;box-sizing: border-box;width: 100%;}
  .themeBox p{width: 80%;height: .3rem;cursor: pointer; line-height: .3rem;margin: .05rem auto;text-align: center;color: white;font-size: .14rem;border-radius: 10px;}
  .themeBox p:nth-child(1){background: $background-color-theme}
  .themeBox p:nth-child(2){background: $background-color-theme1}
  .themeBox p:nth-child(3){background: $background-color-theme2}
  .themeBox p:nth-child(4){background: $background-color-theme3}
  .themeBox p:nth-child(5){background: $background-color-theme4}
  .themeBox p:nth-child(6){background: $background-color-theme5}
  .themeBox p:active{box-shadow: 0 0 10px #ccc;}
</style>
