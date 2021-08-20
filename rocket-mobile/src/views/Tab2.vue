<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header >
        <ion-toolbar style="text-align: center">
          <img width="50" height="50" src="../../public/assets/R2.png" />
        </ion-toolbar>
      </ion-header>
      <h1 style="text-align: center;">Settings</h1>
    <ion-grid style="text-align: center">
      <ion-button href="/">Sign Out</ion-button>
    </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">

import {
  
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from 'axios'
 
export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
  },
  data() {
    return {
      elevators: []
    }
  },

  //Display all elevators
  beforeMount() {
    axios.get('https://whispering-tundra-91467.herokuapp.com/api/Elevators/').then(response => {
      this.elevators = response.data
      
      //Filter offline elevators
      this.elevators = this.elevators.filter((elevator: {status: null}) => elevator.status === 'offline');
      console.log(this.elevators)
    })
  }
});
</script>