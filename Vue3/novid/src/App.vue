<script lang='ts' setup>
</script>

<template>
  <div class='box'>
    <div class="box-left"></div>
    <div class="box-center"></div>
    <div class="box-right"></div>

  </div>
</template>

<style lang='scss' scoped>
.box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  &-left {
    width: 400px;
  }

  &-center {
    flex: 0 0 auto;
  }

  &-right {
    width: 400px;
  }
}
</style>