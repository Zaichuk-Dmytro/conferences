<template>
  <div class="selector-btn">
    <button class="selector-btn__left-arrow"></button>
    <button class="selector-btn__arrow_right selector-btn__arrow_right_long"></button>        
  </div>
</template>

<script>
export default {
  name: 'selector-btn'
}
</script>

<style lang="scss" scoped>
  .selector-btn{
    position: relative;
    display: flex;
    align-items: center;
    width: 175px;
     height: 102px;

    &::before{
      position: absolute;
      right: 0;
      top: 0;
      width: 100px;
      height: 100px;
      content: "";
      background-image: url(../svg/circle.svg);             
    }
    &__left-arrow{
      width: 24px;
      height: 24px;
      margin-right: 30px;
      background-image: url(../svg/right-arrow.svg);             
    }

    &__arrow_right{
      width: 44px;
      height: 24px;
      background-image: url(../svg/long-right-arrow.svg);             
    }
  }
</style>