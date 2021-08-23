<template>
  <ion-page>
        <ion-header style="text-align: center;">
          <ion-toolbar>
            <img width="50" height="50" src="../../public/assets/R2.png" />
          </ion-toolbar>
        </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title style="text-align: center;">Rocket Elevators Mobile</ion-card-title>
          <br>
          <ion-card-subtitle style="text-align: center;"> Sign In/Up </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input v-model="password" type="password"></ion-input>
            </ion-item>
            <ion-button
              expand="block"
              color="primary"
              class="ion-margin-top"
              @click="signInWithEmailAndPassword"
            >
              Sign In
            </ion-button>
        </ion-card-content>
        <ion-card-content v-if="errorMsg" class="error-message">
            {{errorMsg}}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
} from "@ionic/vue";

import axios from 'axios'
import {defineComponent} from 'vue'
 
export default defineComponent({
  name: "Authentication",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonCardHeader
  },
  data() {
    return {
      employees: [],
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    async signInWithEmailAndPassword() {
     try {
        if (!this.email || !this.password) {
          this.errorMsg = "Email and password required!";
          return;
        }
        
        axios.get('https://whispering-tundra-91467.herokuapp.com/api/users').then(response => {
          if (response.data.length === 0) this.errorMsg = 'No users found'

          const emailExists = response.data.filter((u: {email: string}) => u.email === this.email).length > 0

          if (emailExists) {
            this.$router.push("/tabs/tab1");
            return
          }

          this.errorMsg = "User with email not found!";
        })
      } 
      catch (error) {
        this.errorMsg = error.message;
      }

    }
  },
});
</script>