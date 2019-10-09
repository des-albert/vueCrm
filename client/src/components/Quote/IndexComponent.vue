<template>
  <div class="container">
    <div class="table-responsive col-md-10 bg-custom">
      <h2 class="text-info">
        Quotes
        <router-link
          :to="{name: 'QuoteCreate'}"
          class="btn btn-primary"
        >
          New
        </router-link>
      </h2>
      <table class="table table-hover table-striped text-info">
        <thead>
          <tr>
            <th>Name</th>
            <th>Opportunity</th>
            <th>Status</th>
            <th>&nbsp;</th>
            <th>Action</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="quote in quotes"
            :key="quote._id"
          >
            <td>{{ quote.Name }}</td>
            <td>{{ quote.Opportunity }}</td>
            <td>{{ quote.Status }}</td>
            <td>
              <router-link
                :to="{name: 'QuoteEdit', params: { id: quote._id }}"
                class="btn btn-success"
              >
                Edit
              </router-link>
            </td>
            <td>
              <button
                class="btn btn-warning"
                @click.prevent="deleteQuote(quote._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      quotes: []
    };
  },
  created() {
    let uri = '/quotes';
    if (process.env.NODE_ENV !== 'production') {
      uri = 'http://localhost:4000/quotes';
    }
    this.axios.get(uri).then(response => {
      this.quotes = response.data;
    });
  },
  methods: {
    deleteQuote(id) {
      let uri = `/quotes/delete/${id}`;
      if (process.env.NODE_ENV !== 'production') {
        uri = `http://localhost:4000/quotes/delete/${id}`;
      }
      this.axios.delete(uri)
        .then(() => {
          this.quotes.splice(this.quotes.indexOf(id), 1);
        });
    }
  }
};
</script>

<style scoped>
  .table-striped>tbody>tr:nth-child(odd)>td,
  .table-striped>tbody>tr:nth-child(odd)>th {
    background-color: lavender;
  }

  .table-striped>tbody>tr:nth-child(even)>td,
  .table-striped>tbody>tr:nth-child(even)>th {
    background-color: mistyrose;
  }

  .table-striped>tbody>tr:hover>td,
  .table-striped>tbody>tr:hover>th {
    background-color: darksalmon;
  }
</style>
