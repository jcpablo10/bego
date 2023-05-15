<template>
  <div>
    <p class="text-left font-sans mt-10">Order: <span class="font-sans font-medium">#{{order.order_number}}</span></p>
    <be-card :class="itemColsClasses">
      <template #header>
        <div class="flex justify-between items-center h-12">
          <div class="flex gap-4">
            <img src="../assets/camioncito.svg">
            <span class="uppercase">{{ order.type }}</span>
          </div>
          <div class="flex items-center">
            <div class="indicator" :class="order.status_class"></div>
            <div class="">{{order.status_label}}</div>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="order">
          <li class="order__item flex justify-between">
            <div class="order__details text-left">
              <div class="order__image">
                <img src="../assets/trailer.svg" class="order__image--vehicle" alt="" />
              </div>
              <div>
                <span class="uppercase order__subtitle text-left">Pickup</span>
                <p class="order__location text-left">
                  {{ order.pickup.city }}
                </p>
                <p class="order__address text-left">
                  {{ order.pickup.address }}
                </p>
              </div>
            </div>
            <div class="order__schedule">
              <span class="order__date">01/04/23</span>
              <p class="order__time">10:45</p>
            </div>
          </li>
          
          <li class="order__item flex justify-between">
            <div class="order__details text-left">
              <div class="order__image">
                <img src="../assets/marker.svg" class="order__image--marker"  alt=""/>
              </div>
              <div>
                <span class="uppercase order__subtitle text-left">Dropoff</span>
                <p class="order__location text-left">
                  {{ order.dropoff.city }}
                </p>
                <p class="order__address text-left">
                  {{ order.dropoff.address }}
                </p>

              </div>
            </div>
            <div class="order__schedule">
              <span class="order__date">01/04/23</span>
              <p class="order__time">17:30</p>
            </div>
          </li>
        </ul>
      </template>
      <template #footer>
        <div class="flex order__cta">
          <be-pick>
            Start pickup in 1:30:00
          </be-pick>
          <be-button>
            <span>Resume</span>
            <img src="../assets/eye.svg" />
          </be-button>
        </div>
      </template>
    </be-card>
  </div>
</template>
<script>
import BeCard from "./atoms/BeCard.vue"
import BeButton from './atoms/BeButton.vue'
import BePick from './atoms/BePick.vue'

export default {
  props: ['order'],
  components: {
    BeCard,
    BeButton,
    BePick,
  },
  computed: {
    sectionClasses() {
      return 'grid grid-cols-12'
    },
    itemColsClasses() {
      return 'col-start-2 col-end-12'
    },
    subtitleClasses() {
      return ''
    }
  },
  mounted() {
    console.log(this.order)
  },
}
</script>
<style lang="scss">
  @import '../styles/_variables.scss';
  .indicator {
    height: 11px;
    width: 11px;
    border-radius: 50%;
    margin: 0 .5rem;
  }
  .blue-dot-bg{
    background-color: #0394FF;
  }
  .grey-dot-bg{
    background-color: #989898;
  }
  .order {
    padding: 0 1rem;
  }
  .order__item {
    width: 100%;
    list-style-type: none;
    align-items: flex-end;
    min-height: 80px;
    gap: 10px;
    height: 100%;
    min-height: 70px;
    margin-bottom: 1rem;
  }
  .order__details {
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    gap: 15px;
  }
  .order__subtitle {
    font-size: 10px;
    color: $gris1;
    margin: 0;
  }
  .order__location {
    font-weight: bold;
    margin: 0;
  }
  .order__address {
    font-size: 14px;
    margin: 0;
  }
  .order__image {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
  }
  .order__image--vehicle {
    width: 26px;
  }
  .order__image--marker{
    width: 16px;
  }
  .order__date,
  .order__time {
    margin: 0;
  }
  .order__date {
    color: $gris2;
    font-size: 12px;
  }
  .order__time {
    font-size: 14px;
  }
  .order__cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }
</style>