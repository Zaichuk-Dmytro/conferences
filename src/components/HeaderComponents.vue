<template>
  <div class="header-component">
    <svg class="header-component__icon" width="56" height="10" viewBox="0 0 56 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5C5.33333 8.46667 16.8 12.52 28 1C31.5 5.4 41.8 12.36 55 5C50.5 1.8 38.8 -1.88 28 9C24.5 4.73333 14.2 -2.04 1 5Z" stroke="#09192F" stroke-opacity="0.1"/>
    </svg>
    <span class="header-component__title">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'header-components',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.header-component{
  &__title{
    margin-left: 20px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #C48F65;
    
    @media screen and (min-width: 768px) {
      color: #672940;         
    }
  }
}
</style>