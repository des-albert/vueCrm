<template>
  <div class="container-fluid">
    <div id="app">
      <slider
        :width="200"
        format="push"
        direction="left"
        :opacity="0.15"
        :links="[
          {'id': 1, 'text': 'Accounts', 'url': '/accounts'},
          {'id': 2, 'text': 'Opportunities', 'url': '/opportunities'},
          {'id': 3, 'text': 'Tasks', 'url': '/tasks'},
          {'id': 4, 'text': 'About', 'url': '/about'}
        ]"
      />&nbsp; Toocan CRM
      <br>
      <router-view />
    </div>
  </div>
</template>

<script>
import Slider from './components/Slider';
export default {
  name: 'App',
  components: {
    'slider': Slider
  }
};
</script>

<style lang="scss">
  #app {
    padding: 2em;
  }
</style>
