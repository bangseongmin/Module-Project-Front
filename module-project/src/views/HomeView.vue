<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <sign-in />
    <sign-up />
    <financial-leger />
    <time-plan />
  </div>
</template>

<script>
import SignIn from "@/views/SignInView.vue";
import SignUp from "@/views/SignUpView.vue";
import TimePlan from "@/views/TimePlanView.vue";
import FinancialLeger from "@/views/FinancialLedgerView.vue";

export default {
  name: 'HomeView',
  components: {
    SignIn,
    SignUp,
    TimePlan,
    FinancialLeger
  }
}
</script>
