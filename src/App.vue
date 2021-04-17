<template>
  <div id="app">
    <div :class="{popup_wr: !popupOpen}">
      <button class="btn" v-if="popupOpen===false" @click.prevent="popupOpen=true">Налоговый вычет</button>
      <popup v-on:closed="closePopup" v-if="popupOpen" />
    </div>
  </div>
</template>

<script>
import popup from './components/popup.vue'


export default {
  name: 'App',
  components: {
    popup
  },
  data () {
    return {
      popupOpen: false
    }
  },
  methods: {
    closePopup () {
      this.popupOpen = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

 @font-face {
  font-family: 'LabGrotesque';
  src: local('LabGrotesque'), local('Lab-Grotesque'),
    url('~@/assets/fonts/LabGrotesque/LabGrotesque-Black.woff') format('woff'),
    url('~@/assets/fonts/LabGrotesque/LabGrotesque-Black.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  }

  @font-face {
  font-family: 'LabGrotesque light';
  src: local('LabGrotesque'), local('Lab-Grotesque'),
    url('~@/assets/fonts/LabGrotesque/LabGrotesque-Light.woff') format('woff'),
    url('~@/assets/fonts/LabGrotesque/LabGrotesque-Light.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  }

.btn {
  font-family: "LabGrotesque light";
  font-size: 16px;
  padding: 10px 18px;
  background-color: transparent;
  border: none;
  outline: none;
  color: aliceblue;
  border: 1px solid aliceblue;
  border-radius: 7px;
  margin-top: auto;
  margin-bottom: auto;
}

.btn:hover {
  background-color: white;
  color: black;
}

.btn:disabled {
  background-color: #BEC5CC;
}

.popup_wr {
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  background-size: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

}
</style>
