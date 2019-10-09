<template>
  <div class="container">
    <h4>Edit Account</h4>
    <form @submit.prevent="updateAccount">
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
  created() {
    let uri = `/accounts/edit/${this.$route.params.id}`;
    if (process.env.NODE_ENV !== 'production') {
      uri = `http://localhost:4000/accounts/edit/${this.$route.params.id}`;
    }
    this.axios.get(uri).then(response => {
      this.account = response.data;
    });
  },

  methods: {
    updateAccount() {
      let uri = `/accounts/update/${this.$route.params.id}`;
      if (process.env.NODE_ENV !== 'production') {
        uri = `http://localhost:4000/accounts/update/${this.$route.params.id}`;
      }
      this.axios.post(uri, this.account)
        .then(() => {
          this.$router.push({name: 'AccountIndex'});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>

</style>
