<template lang="">
  <div class="card">
    <div class="card__header pt-2 px-6 border-b box-border">
      <slot name="header" >
        Header
      </slot>
    </div>
    <div class="card__content p-2 box-border">
      <slot name="content" />
    </div>
    <div class="card__footer p-2 box-border">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="scss">
  .card{
    width: 100%;
    overflow: hidden;
    background:
      linear-gradient(black, black) padding-box,
      linear-gradient(45deg, white, transparent) border-box;

      
    border-radius: 25px;
    border: 1px solid transparent;
    min-height: 280px;
  }
  .card__header {

  }
  .card__content {}
  .card__footer {}
</style>