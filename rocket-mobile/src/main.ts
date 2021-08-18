import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuKAhmLwP-Xz8sZLu3jFxLpQWLsU9NF_U",
  authDomain: "rocket-elevators-mobile-88449.firebaseapp.com",
  projectId: "rocket-elevators-mobile-88449",
  storageBucket: "rocket-elevators-mobile-88449.appspot.com",
  messagingSenderId: "560737924922",
  appId: "1:560737924922:web:8052e6556ded49a14c8203"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();


const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});