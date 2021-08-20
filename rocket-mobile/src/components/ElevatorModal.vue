<template>
    <div>
      <ion-header>
      <ion-toolbar>
        <ion-title> Serial: {{ elevator.serial_number }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" ion-padding="true">
      <br>
      <br>
       <ion-list>
      <ion-item @click="updateStatus">
        <ion-label>
          <h6>ID: {{elevator.id}}</h6>
          <h6>Column ID: {{elevator.column_id}}</h6>
          <h6>Model: {{elevator.model}}</h6>
          <h6>Type: {{elevator.elevator_type}}</h6>
          <h6>status: {{elevator.status}}</h6>
          <h6>Commissioning Date: {{elevator.date_of_commissioning}}</h6>
          <h6>Last Inspection Date: {{elevator.last_inspection}}</h6>
          <h6>Certificate of Inspection: {{elevator.certificate_of_inspection}}</h6>
          <h6>Information: {{elevator.information}}</h6>
          <h6>Created at: {{elevator.created_at}}</h6>
          <h6>Updated at: {{elevator.updated_at}}</h6>
        </ion-label>
        <ion-toggle slot="start" name="elevator" placeholder="Change Status" unchecked></ion-toggle>
      </ion-item>
    </ion-list>
    <br>
    <br>
    <ion-grid style="text-align: center">
      <img width="150" height="150" src="../../public/assets/R2.png" />
    </ion-grid>
    <br>
    <br>
    <ion-grid style="text-align: center">
      <ion-button href="/tabs/tab1">Close</ion-button>
    </ion-grid>
    </ion-content>
    </div>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios'

export default defineComponent({
  name: 'ElevatorModal',
  props: {
    elevator: { type: Object },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonButton },
  methods: {
    updateStatus() {
      axios.put(`https://whispering-tundra-91467.herokuapp.com/api/Elevators/${this.elevator.id}/`).then(response => {
        this.elevators = response.data
        
        //Change the status to online
        console.log('Updating the status of elevator ' + this.elevator.id)
      })
      
    }
  },
  beforeMount() {
    console.log('Elevator', this.elevator.elevator_type)
  }
});
</script>