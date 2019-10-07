<template>
  <div class="container">
    <h4>Edit Opportunity</h4>
    <form @submit.prevent="updateOpportunity">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label> Account:  {{ opportunity.Account }}</label>
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
            <label for="OppShipDate">Stage</label>
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
      stages: []
    };
  },
  computed: {
    stageNames: function () {
      return  [...new Set(this.stages.map(p => p.Name))];
    }
  },
  created() {
    let uri = `/opportunities/edit/${this.$route.params.id}`;
    if (process.env.NODE_ENV !== 'production') {
      uri = `http://localhost:4000/opportunities/edit/${this.$route.params.id}`;
    }
    this.axios.get(uri).then(response => {
      this.opportunity = response.data;
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
    updateOpportunity() {
      let uri = `/opportunities/update/${this.$route.params.id}`;
      if (process.env.NODE_ENV !== 'production') {
        uri = `http://localhost:4000/opportunities/update/${this.$route.params.id}`;
      }
      this.axios.post(uri, this.opportunity)
        .then(() => {
          this.$router.push({name: 'OppIndex'});
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
