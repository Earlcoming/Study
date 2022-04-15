<template>
  <div class="container">
    <div class="footer">
      <div class="complete">已完成<span>0</span>个</div>
      <div class="clear">清除已完成</div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scropd>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
body,
html {
  font-family: "微软雅黑";
  color: #333;
  font-size: 14px;
}
input:focus {
  outline: none;
}
.container {
  width: 800px;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
}

.main {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  ul {
    li {
      &:not(:last-child) {
        border-bottom: 1px solid #ccc;
      }
      &:hover {
        background-color: pink;
      }
      transition: all 0.5s;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 20px;
      div {
        display: flex;
        align-items: center;
        input {
          margin-right: 10px;
        }
      }
    }
  }
}

.footer {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  .clear {
    padding: 10px 20px;
    background-color: pink;
    border-radius: 4px;
    text-combine-upright: ;
  }
}
</style>
