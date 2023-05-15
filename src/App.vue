<template>
  <div id="app">
    <nav>
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/">
            <img src="./assets/angle-small-down.svg" alt="">
          </router-link>
        </li>
        <li class="nav__item font-serif">
          Upcoming
        </li>
        <li class="nav__item">
          <img src="./assets/bell.svg" alt="">
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url(./styles/index.scss);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  
}
.nav__list {
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  padding-left: 0;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.nav__item {
  list-style-type: none;
}
</style>
