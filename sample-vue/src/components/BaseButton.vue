<template>
  <router-link :to="path" class="button">{{ text }}</router-link>
</template>

<script>

export default {
  name: 'BaseButton',
  props: {
    /**
     * @param text buttonに表示させる文字列
     * @param path 遷移先のURLのパス
     */
    text: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
  display: block;
  font-size: 22px;
  width: 400px;
  height: 70px;
  padding: 25px;
  box-sizing: border-box;
  color: #fff;
  background: #000;
  font-weight: 700;
  text-align: center;
  line-height: 1;
  transition: all .3s ease;
  border: 1px solid transparent;
  &:hover {
    background-color: #fff;
    border-color: #000;
    color: #000;
  }
}
</style>
