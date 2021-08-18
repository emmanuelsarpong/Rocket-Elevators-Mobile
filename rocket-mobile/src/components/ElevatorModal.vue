<template>
    <div>
      <ion-header>
      <ion-toolbar>
        <ion-title> Serial: {{ elevator.serial_number }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="dismissModal()"></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" ion-padding="true">
       <ion-list>
      <ion-item @click="updateStatus">
        <ion-label>
          <h4>ID: {{elevator.id}}</h4>
          <h4>Column ID: {{elevator.column_id}}</h4>
          <h4>Model: {{elevator.model}}</h4>
          <h4>Type: {{elevator.elevator_type}}</h4>
          <h4>status: {{elevator.status}}</h4>
          <h4>Commissioning Date: {{elevator.date_of_commissioning}}</h4>
          <h4>Last Inspection Date: {{elevator.last_inspection}}</h4>
          <h4>Certificate of Inspection: {{elevator.certificate_of_inspection}}</h4>
          <h4>Information: {{elevator.information}}</h4>
          <h4>Created at: {{elevator.created_at}}</h4>
          <h4>Updated at: {{elevator.updated_at}}</h4>
        </ion-label>
        <ion-toggle slot="start" name="elevator" placeholder="Change Status" unchecked></ion-toggle>
      </ion-item>
    </ion-list>
    </ion-content>
    </div>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/vue';
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
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton },
  methods: {
    dismissModal() {
      console.log('Dismissed!!!')
    },
    updateStatus() {
      axios.put(`https://whispering-tundra-91467.herokuapp.com/api/Elevators/${this.elevator.id}/online`).then(response => {
      //  axios.put(`https://whispering-tundra-91467.herokuapp.com/api/interventions/${this.elevator.id}/inprogress`).then(response => {
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