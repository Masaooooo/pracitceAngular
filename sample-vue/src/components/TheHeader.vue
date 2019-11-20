<template>
  <header class="header">
    <nav>
      <ul class="navList">
        <li class="navItem">
          <router-link to="/" class="navLink" exact>トップ</router-link>
        </li>
        <li class="navItem">
          <router-link to="/list" class="navLink" exact>商品一覧</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
.header{
  padding: 60px 0;
}

.navList{
  display: flex;
  justify-content: center;
}
.navLink{
  color: #ccc;
  font-weight: 700;
  line-height: 1;
}

.navItem{
  padding: 0 20px;
  &:not(:first-child){
    border-left: 1px solid #000;
  }
}

.router-link-active{
  color: #000;
}
</style>
