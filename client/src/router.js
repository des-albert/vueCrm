import Vue from 'vue';
import Router from 'vue-router';

import VueAxios from 'vue-axios';
import axios from 'axios';

import IndexAccount from '@/components/Account/IndexComponent.vue';
import EditAccount from '@/components/Account/EditComponent.vue';
import CreateAccount from '@/components/Account/CreateComponent.vue';

import IndexOpportunity from '@/components/Opportunity/IndexComponent.vue';
import EditOpportunity from '@/components/Opportunity/EditComponent.vue';
import CreateOpportunity from '@/components/Opportunity/CreateComponent.vue';
import ListOpportunity from '@/components/Opportunity/ListComponent.vue';


import IndexQuote from '@/components/Quote/IndexComponent.vue';
import EditQuote from '@/components/Quote/EditComponent.vue';
import CreateQuote from '@/components/Quote/CreateComponent.vue';
import ListQuote from '@/components/Quote/ListComponent.vue';

import AboutComponent from '@/views/About.vue';


Vue.use(Router);
Vue.use(VueAxios, axios);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { name: 'AccountIndex', path: '/accounts', component: IndexAccount },
    { name: 'AccountEdit', path: '/accounts/:id', component: EditAccount },
    { name: 'AccountCreate', path: '/accounts/create', component: CreateAccount },

    { name: 'OpportunityIndex', path: '/opportunities', component: IndexOpportunity },
    { name: 'OpportunityEdit', path: '/opportunities/:id', component: EditOpportunity },
    { name: 'OpportunityCreate', path: '/opportunities/create', component: CreateOpportunity },
    { name: 'OpportunityList', path: '/quotes/:Name', component: ListOpportunity },

    { name: 'QuoteIndex', path: '/quotes', component: IndexQuote },
    { name: 'QuoteEdit', path: '/quotes/:id', component: EditQuote },
    { name: 'QuoteCreate', path: '/quotes/create', component: CreateQuote },
    { name: 'QuoteList', path: '/quotes/:Name', component: ListQuote },
    { name: 'About', path: '/about',  component: AboutComponent  }
  ]
});
