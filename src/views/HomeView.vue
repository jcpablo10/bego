<template>
  <div>
    <section :class="sectionClasses">
      <be-input :class="itemColsClasses" v-model="searchString"/>
    </section>
    <section :class="sectionClasses">
    </section>
    <section :class="sectionClasses" v-if="orders">
      <BeCardOrder
        v-for="(item, index) in filteredOrders"
        :key="index"
        :order="item"
        :class="itemColsClasses"
      />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import BeCardOrder from '../components/BeCardOrder.vue'
import BeInput from '../components/atoms/BeInput.vue'
import GetUpcomingOrdersUseCase from '../../app/orders/application/getUpcomingOrdersUseCase'

export default {
  name: 'HomeView',
  components: { BeCardOrder, BeInput },
  data() {
    return {
      orders: null,
      searchString: '',
    }
  },
  computed: {
    sectionClasses() {
      return 'grid grid-cols-12'
    },
    itemColsClasses() {
      return 'col-start-2 col-end-12'
    },
    filteredOrders() {
      return this.orders.filter((item)=>{
        return item.order_number.includes(this.searchString)
      })
    }

  },
  methods: {
    async getUpcomingOrders() {
      const getUpcomingOrdersUseCase = new GetUpcomingOrdersUseCase()
      const response = await getUpcomingOrdersUseCase.get()
      this.orders = response
      console.log("🚀 ~ file: HomeView.vue:99 ~ getUpcomingOrders ~ response:", response)
    }
  },
  mounted() {
    this.getUpcomingOrders()
  },
}
</script>
<style>
</style>
