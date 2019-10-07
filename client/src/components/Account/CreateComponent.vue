<template>
  <div class="container">
    <h4>Create Account</h4>
    <form @submit.prevent="createAccount">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="AccName">Name</label>
            <input
              id="AccName"
              v-model="account.Name"
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label for="AccIndustry">Industry</label>
            <input
              id="AccIndustry"
              v-model="account.Industry"
              type="text"
              class="form-control"
            >
          </div>
          <button
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        Name: null,
        Industry: null,
      }
    };
  },

  methods: {
    createAccount() {
      let uri = '/accounts/create';
      if (process.env.NODE_ENV !== 'production') {
        uri = 'http://localhost:4000/accounts/create';
      }
      this.axios.post(uri, this.account)
        .then(() => {
          this.$router.push({name: 'AccIndex'});
        });
    }
  }
};
</script>

<style scoped>

</style>
