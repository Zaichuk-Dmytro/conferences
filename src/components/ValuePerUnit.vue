<template>
  <div class="value-per-unit">
    <span class="value-per-unit__value">{{value}}</span>
    <span class="value-per-unit__unit" v-html="unit"></span>
  </div>
</template>

<script>
export default {
  name: 'value-per-unit',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    unit: {
      type: [String, Number],
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .value-per-unit{
    white-space: nowrap;
    &__value{
      margin-right: 10px;
      font-family: 'TTRamillas-ExtraLight';
      font-style: normal;
      font-weight: 300;
      font-size: 48px;
      line-height: 100%;
      text-align: right;
      color: #09192F;
      
    }

    &__unit{
      position: relative;
      font-family: Gilroy;
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #672940;
      
    
      &::before{
        position: absolute;
        bottom: -12px;
        left: -19px;
        margin-left: 5px;
        content: url(../svg/test.svg);              
      }
    }
  }
</style>