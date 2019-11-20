<template>
  <div class="list">
    <TheHeader></TheHeader>
    <ul class="productList">
      <router-link tag="li" :to="'/detail/'+ produtItem.id" class="productItem" v-for="(produtItem, pi) in products" :key="pi">
        <img class="productThumb" :src="'..' + produtItem.image" alt="">
        <p class="productTitle">{{ produtItem.name }}</p>
        <ul class="tagList">
          <li class="tagItem" v-for="(tagItem, ti) in produtItem.tag" :key="ti">
            <BaseTag :text="tagItem"></BaseTag>
          </li>
        </ul>
      </router-link>
    </ul>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import BaseTag from '@/components/BaseTag'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'List',
  components: {
    TheHeader,
    BaseTag
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  methods: {
    ...mapActions([
      'fetchProducts'
    ])
  },
  created() {
    this.fetchProducts()
  }
}
</script>

<style lang="scss" scoped>
  .productList{
    width: 1370px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .productItem{
    width: 395px;
    height: 415px;
    margin-bottom: 38px;
    padding: 40px 75px 35px;
    box-sizing: border-box;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
  .productTitle{
    font-size: 12px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 40px;
  }
  .productThumb{
    object-fit: cover;
    width: 247px;
    height: 247px;
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
</style>
