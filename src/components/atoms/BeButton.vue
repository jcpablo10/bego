<template lang="">
  <a class="button">
    <slot />
  </a>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .button {
    height: 50px;
    width: 130px;
    border-radius: 21.93px;
    background-color: #FFFF00;
    box-shadow: inset -2px -2px 4px 0 #C2C200, inset 2px 2px 4px 0 #FFFF80;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: black;
    font-weight: bold;
  }
</style>

