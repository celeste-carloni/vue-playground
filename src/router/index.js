import Vue from 'vue';
import Router from 'vue-router';
import AtomsPage from '@/components/pages/AtomsPage';
import MoleculesPage from '@/components/pages/MoleculesPage';
import OrganismsPage from '@/components/pages/OrganismsPage';

//ATOMS
import ButtonsPage from '@/components/pages/atoms/ButtonsPage';

//for testing new component only
import TestingPage from '@/components/pages/TestingPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/atoms',
      name: 'AtomsPage',
      component: AtomsPage
    },
    {
      path: '/buttons',
      name: 'Buttonspage',
      component: ButtonsPage
    },
    {
      path: '/molecules',
      name: 'MoleculesPage',
      component: MoleculesPage
    },
    {
      path: '/organisms',
      name: 'OrganismsPage',
      component: OrganismsPage
    },
    {
      path: '/testing',
      name: 'TestingPage',
      component: TestingPage
    }
  ]
})
