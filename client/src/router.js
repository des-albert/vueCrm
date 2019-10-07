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
import Tasks from '@/components/Task/TaskSummary.vue';
import AboutComponent from '@/views/About.vue';


Vue.use(Router);
Vue.use(VueAxios, axios);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { name: 'AccIndex', path: '/accounts', component: IndexAccount },
    { name: 'AccEdit', path: '/accounts/:id', component: EditAccount },
    { name: 'AccCreate', path: '/accounts/create', component: CreateAccount },
    { name: 'OppIndex', path: '/opportunities', component: IndexOpportunity },
    { name: 'OppEdit', path: '/opportunities/:id', component: EditOpportunity },
    { name: 'OppCreate', path: '/opportunities/create', component: CreateOpportunity },
    { name: 'Tasks', path: '/tasks', component: Tasks },
    { name: 'About', path: '/about',  component: AboutComponent  }
  ]
});
