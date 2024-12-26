import { createApp } from 'vue';
import './assets/tailwind.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import QuestionView from './components/views/QuestionView.vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import StartView from './components/views/StartView.vue';
import ResultView from './components/views/ResultView.vue';

const pinia = createPinia();
const app = createApp(App);

const routes = [
  {
    path: '/',
    component: StartView,
  },
  {
    path: '/question',
    component: QuestionView,
  },
  {
    path: '/result',
    component: ResultView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

app.use(router);
app.use(pinia);
app.mount('#app');
