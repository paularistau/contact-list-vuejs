import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const expresss = require('express');
const PORT = 3000
const HOST = '0.0.0.0';

const app = expresss();

app.get('/', (req, res) => {
  res.send(App)
});
app.listen(PORT, HOST);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
