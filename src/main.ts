import './assets/style/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import VueObserveVisibility from 'vue3-observe-visibility'

createApp(App).use(VueObserveVisibility).mount('#app');
