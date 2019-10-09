<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarColor01"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav mr-auto">
          <li>
            <img
              src="./assets/Toocan Icon.png"
              alt=""
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{name: 'AccountIndex'}"
              class="nav-link"
            >
              Accounts
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{name: 'OpportunityIndex'}"
              class="nav-link"
            >
              Opportunities
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{name: 'QuoteIndex'}"
              class="nav-link"
            >
              Quotes
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              :to="{name: 'About'}"
              class="nav-link"
            >
              About
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <transition
      name="bounce"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
  root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: darkseagreen
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .bg-custom {
    background-color: #2d738f;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    transform: translateX(10px);
    opacity: 0;
  }

</style>
