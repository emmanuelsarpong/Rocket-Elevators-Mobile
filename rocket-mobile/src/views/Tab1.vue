<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <ion-header >
          <ion-toolbar style="text-align:center;background:red;">
            <img width="50" height="50" src="../../public/assets/R2.png" />
            <!-- <ion-title size="large">Offline Elevators</ion-title> -->
          </ion-toolbar>
        </ion-header>
      <h1 style="text-align: center;">Offline Elevators</h1>
      <ion-list>
        <ion-item v-for="elevator of elevators" :key="elevator.id" @click="openModal(elevator)">
          <ion-label>
            <h2  style="text-align: center">Elevator with Serial Number: {{elevator.serial_number}}</h2>
            <!-- <h2  style="text-align: center">ID: {{elevator.id}}</h2> -->
          </ion-label>
        </ion-item>
      </ion-list>
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
  modalController
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from 'axios'
import ElevatorModal from '../components/ElevatorModal.vue'
 
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
  methods: {
    async openModal(elevator: {}) {
      const modal = await modalController
        .create({
          component: ElevatorModal,
          componentProps: {
            elevator
          },
        })
      return modal.present();
    },
  },

  //Display all elevators
  beforeMount() {
    axios.get('https://whispering-tundra-91467.herokuapp.com/api/elevators').then(response => {
      this.elevators = response.data
      
      //Filter offline elevators
      this.elevators = this.elevators.filter((elevator: {status: null}) => elevator.status === 'offline');
      console.log(this.elevators)
    })
  }
});
</script>