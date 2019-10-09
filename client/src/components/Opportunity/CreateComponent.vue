<template>
  <div class="container">
    <h4>Create Opportunity</h4>
    <form @submit.prevent="createOpportunity">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="OppAccount">Account</label>&nbsp;
            <select
              id="OppAccount"
              v-model="opportunity.Account"
            >
              <input
                v-model="opportunity.Account"
                type="hidden"
              >
              <option
                v-for="accountName in accountNames"
                :key="accountName"
              >
                {{ accountName }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="OppName">Name</label>
            <input
              id="OppName"
              v-model="opportunity.Name"
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label for="OppStage">Stage</label>&nbsp;
            <select
              id="OppStage"
              v-model="opportunity.Stage"
            >
              <input
                v-model="opportunity.Stage"
                type="hidden"
              >
              <option
                v-for="stageName in stageNames"
                :key="stageName"
              >
                {{ stageName }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="OppShipDate">Requested Ship Date</label>
            <Datepicker
              id="OppShipDate"
              v-model="opportunity.ShipDate"
            />
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
import Datepicker from 'vuejs-datepicker';
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      opportunity: {
        Name: null,
        Account: null,
        Stage: null,
        ShipDate: null
      },
      accounts: [],
      stages: []
    };
  },
  computed: {
    accountNames: function() {
      return  [...new Set(this.accounts.map(p => p.Name))];
    },
    stageNames: function () {
      return  [...new Set(this.stages.map(p => p.Name))];
    }
  },
  created() {
    let uri = '/accounts';
    if (process.env.NODE_ENV !== 'production') {
      uri = 'http://localhost:4000/accounts';
    }
    this.axios.get(uri).then(response => {
      this.accounts = response.data;
    });

    let urs = '/stages';
    if (process.env.NODE_ENV !== 'production') {
      urs = 'http://localhost:4000/stages';
    }
    this.axios.get(urs).then(response => {
      this.stages = response.data;
    });
  },

  methods: {
    createOpportunity() {
      let uri = '/opportunities/create';
      if (process.env.NODE_ENV !== 'production') {
        uri = 'http://localhost:4000/opportunities/create';
      }
      this.opportunity.ShipDate = new Date(this.opportunity.ShipDate).setHours(5, 0, 0, 0);
      this.axios.post(uri, this.opportunity)
        .then(() => {
          this.$router.push({name: 'OpportunityIndex'});
        });
    }
  }
};
</script>

<style scoped>

</style>
