<template>
  <div class="detail">
    <div class="detailImage">
      <img :src="'..' + detail.image" alt="">
    </div>
    <div class="detailUnder">
      <div class="detailHeader">
        <router-link to="/list" class="detailBackButtoon"><i class="fas fa-chevron-left detailBackArrow"></i>戻る</router-link>
      </div>
      <div class="detailContent">
        <div class="detailLeft">
          <h1 class="detailTitle">{{detail.name}}</h1>
          <p class="detailCopy">{{detail.product_copy}}</p>
          <ul class="tagList">
            <li class="tagItem" v-for="(tagItem, ti) in detail.tag" :key="ti">
              <BaseTag :text="tagItem"></BaseTag>
            </li>
          </ul>
          <p class="detailDescription">{{detail.description}}</p>
        </div>
        <div class="detailRight">
          <h2 class="detailSubTitle">値段</h2>
          <p class="detailPrice">{{priceStr}}<span class="detailPrice-tax">(税込)</span></p>
          <div class="detailButton">
            <BaseButton text="この商品を買う" path="#"></BaseButton>
          </div>
          <h2 class="detailSubTitle">ショップ情報</h2>
          <p class="detailAddress">〒{{detail.zip_code}}</p>
          <p class="detailAddress">{{detail.shop_address}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTag from '@/components/BaseTag'
import BaseButton from '@/components/BaseButton'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Detail',
  components: {
    BaseTag,
    BaseButton
  },
  computed: {
    ...mapState([
      'detail'
    ]),
    priceStr() {
      return `¥${this.detail.price.toLocaleString()}`
    }
  },
  methods: {
    ...mapActions([
      'fetchProductDetail'
    ])
  },
  created() {
    this.fetchProductDetail(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
  .detailImage{
    img{
      object-fit: cover;
      width: 100%;
      height: 476px;
    }
  }
  .detailUnder{
    width: 1370px;
    margin: 30px auto 0;
    padding-bottom: 100px;
  }
  .detailBackButtoon{
    color: #000;
  }
  .detailBackArrow{
    padding-right: 5px;
  }
  .detailContent{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .detailLeft{
    width: 812px;
  }
  .detailTitle{
    font-size: 32px;
  }
  .detailCopy{
    margin-top: 26px;
    font-weight: 700;
  }
  .tagList{
    margin-top: 20px;
    display: flex;
  }
  .tagItem{
    &:not(:first-child){
      margin-left: 5px;
    }
  }
  .detailDescription{
    margin-top: 30px;
    font-size: 16px;
    line-height: 2.5;
  }
  .detailRight{
    width: 400px;
  }
  .detailButton{
    margin: 38px 0;
  }
  .detailSubTitle{
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 14px;
  }
  .detailPrice{
    font-size: 32px;
    font-weight: 700;
    &-tax{
      font-size: 16px;
    }
  }
  .detailAddress{
    font-size: 16px;
    line-height: 1.8;
  }
</style>
