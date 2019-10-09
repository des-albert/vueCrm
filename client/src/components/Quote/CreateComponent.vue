<template>
  <div class="container">
    <h4>Create Quote</h4>
    <form @submit.prevent="createQuote">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="QuoteOpp">Opportunity</label>&nbsp;
            <select
              id="QuoteOpp"
              v-model="quote.Opportunity"
            >
              <input
                v-model="quote.Opportunity"
                type="hidden"
              >
              <option
                v-for="oppSelect in oppNames"
                :key="oppSelect"
              >
                {{ oppSelect }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="QuoteName">Name</label>
            <input
              id="QuoteName"
              v-model="quote.Name"
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label for="QuoteStatus">Status</label>&nbsp;
            <select
              id="QuoteStatus"
              v-model="quote.Status"
            >
              <input
                v-model="quote.Status"
                type="hidden"
              >
              <option
                v-for="status in quoteStateNames"
                :key="status"
              >
                {{ status }}
              </option>
            </select>
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
      quote: {
        Name: null,
        Opportunity: null,
        Status: null
      },
      opportunities: [],
      quoteStates: []
    };
  },
  computed: {
    oppNames: function () {
      return  [...new Set(this.opportunities.map(p => p.Name))];
    },
    quoteStateNames: function () {
      return  [...new Set(this.quoteStates.map(p => p.Name))];
    }
  },
  created() {
    let urs = '/opportunities';
    if (process.env.NODE_ENV !== 'production') {
      urs = 'http://localhost:4000/opportunities';
    }
    this.axios.get(urs).then(response => {
      this.opportunities = response.data;
    });

    let urq = '/quoteStates';
    if (process.env.NODE_ENV !== 'production') {
      urq = 'http://localhost:4000/quoteStates';
    }
    this.axios.get(urq).then(response => {
      this.quoteStates = response.data;
    });
  },
  methods: {
    createQuote() {
      let uri = '/quotes/create';
      if (process.env.NODE_ENV !== 'production') {
        uri = 'http://localhost:4000/quotes/create';
      }
      this.axios.post(uri, this.quote)
        .then(() => {
          this.$router.push({name: 'QuoteIndex'});
        });
    }
  }
};
</script>

<style scoped>

</style>
