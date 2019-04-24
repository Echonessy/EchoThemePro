
<template>
  <div class="errorBox">
    <h1 class="jumbo">Oops!</h1>
    <h3 class="errorTip">错误的请求，如：恶意构造一些非法的数据访问、访问的 url 不合法等</h3>
    <img src="../../assets/img/error/400.png" class="errorImg" alt="Girl has dropped her ice cream.">
    <el-button type="primary" class="backBtn" round><a href="" class="bullshit__return-home">返回首页</a></el-button>
  </div>
</template>

<script>
  export default {}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .errorBox{float: left;width: 100%;height: 100vh;box-sizing: border-box;padding: .1rem; overflow: hidden; display: flex;text-align: center;flex-direction:column; display: flex; position: relative; justify-content:center;  align-items:center;}
  .jumbo{font-size: .3rem;font-weight: bold;line-height: .5rem;}
  .errorTip{font-size: .2rem;;}
  .errorImg{width: 90%;}
  .backBtn{margin-top: .3rem;}
  .backBtn a{color: white;}
</style>

