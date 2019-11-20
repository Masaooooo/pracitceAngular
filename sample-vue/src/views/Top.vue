<template>
  <div class="top">
    <TheHeader></TheHeader>
    <div class="titleWrap">
      <h1 class="title">それっぽいトップページ</h1>
      <p class="subTitle">KAKKO II EIGO NO TEKISUTO GA HAIRU</p>
      <p class="subTitleBg">KAKKO II EIGO<br>NO TEKISUTO GA HAIRU</p>
    </div>
    <div class="button">
      <BaseButton text="商品を見る" path="/list"></BaseButton>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import BaseButton from '@/components/BaseButton'

export default {
  name: 'Top',
  components: {
    TheHeader,
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.titleWrap{
  position: relative;
  margin-top: 200px;
}
.title{
  font-size: 120px;
  line-height: 1;
  font-weight: 700;
  text-align: center;
}
.subTitle{
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
}
.subTitleBg{
  position: absolute;
  top: 70px;
  left: 50%;
  z-index: -1;
  font-size: 60px;
  line-height: 1.05;
  color: #eee;
  text-align: center;
  transform: translateX(-50%);
}

.button{
  width: 400px;
  margin: 150px auto 0;
}
</style>

