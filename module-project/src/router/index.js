import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import FinancialLedgerView from '../views/FinancialLedgerView.vue'
import TimePlanView from '../views/TimePlanView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/SignInView.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUpView
  },
  {
    path: '/plan/wallet',
    name: 'walletPlan',
    component: FinancialLedgerView
  },
  {
    path: '/plan/time',
    name: 'timePlan',
    component: TimePlanView
  },
]

const router = new VueRouter({
  routes
})

export default router
