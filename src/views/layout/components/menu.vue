<template>
    <ul class="menuBox">
      <li v-for="(m, index) in menuConfig">
        <router-link :to="m.link">
          <span  class="iconfont" :class="[m.icon,$route.path == m.link ? 'vColor':'']"></span>
          <p class="menuTxt" :class="$route.path == m.link ? 'vColor':''">{{m.name}}</p>
        </router-link>
      </li>
    </ul>
</template>

<script>
    export default {
        data () {
            return {
              menuConfig:[
                {"name":"测试1","icon":"icon-wxbbiaowang","link":"/page1"},
                {"name":"测试2","icon":"icon-wxbzhuye","link":"/page2"},
                {"name":"测试3","icon":"icon-wxbsousuotuiguang","link":"/page3"},
                {"name":"测试4","icon":"icon-juzhuanchang","link":"/page4"},
              ],
            }
        },
        mounted(){
        },
        methods: {

        }
    }
</script>

<style scoped="" lang="scss">
  .menuBox{float: left;width: 100%;height: .5rem;background: white;border-top: 1px solid #D0D0D0;position: fixed;bottom: 0;left: 0;z-index: 9;}
  .menuBox>li{float: left;height: 100%;width: 25%; text-align: center; box-sizing: border-box;}
  .menuBox>li a{float: left;;width: 100%;height: 100%;text-align: center;flex-direction:column; display: flex; position: relative; justify-content:center;  align-items:center; }
  .iconfont{font-size: .2rem;font-weight: bold;color: #666;}
  .menuTxt{font-size: .13rem;text-align: center;color: #666;}
</style>
