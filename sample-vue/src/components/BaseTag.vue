<template>
  <span class="tag">{{ text }}</span>
</template>

<script>

export default {
  name: 'BaseTag',
  props: {
    /**
     * @param text tagに表示させる文字列
     */
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.tag{
  display: inline-block;
  font-size: 12px;
  padding: 5px 8px;
  box-sizing: border-box;
  color: #000;
  background: #FAFA15;
  font-weight: 700;
  text-align: center;
  line-height: 1;
  border: 1px solid #707070;
}
</style>
