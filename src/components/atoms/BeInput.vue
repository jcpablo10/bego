<template>
  <div class="flex items-center justify-center gap-5 border-b">
    <div class="flex items-center justify-center oval">
      <img src="../../assets/search.svg" alt="" class="input__icon" />
    </div>
    <input
      v-model="searchString"
      type="text"
      class="input__text" 
      placeholder="Search..." 
    />
  </div>
</template>
<script>
export default {
  data(){
    return {
      searchString: '',
    }
  },
  watch: {
    searchString(newVal, oldVal){
      if(newVal !== oldVal){
        this.$emit('input', newVal)
      }
    }
  },
  directives: {
    uppercase: {
      function (el) {
        console.log("🚀 ~ file: BeInput.vue:32 ~ el:", el)
        el.value = el.value.toUpperCase()
      }
    }
  }
}
</script>
<style lang="scss">
  .input__text {
    width: 100%;
    // border: 1px solid red;
    background: transparent;
    height: 41px;
    color: white;
    padding: .3rem;
    outline: none;
    border: 0;
  }
  .input__text::placeholder {
    color: gray;
  }
  .input__icon {
    width: 17px;
  }
  .oval {
    height: 33px;
    width: 33px;
    background: linear-gradient(137.62deg, rgba(8,12,15,0.65) 0%, #1A1F26 100%);
    box-shadow: inset -2px -2px 3px 0 #1E1E1E;
    border-radius: 50%;
  }
</style>