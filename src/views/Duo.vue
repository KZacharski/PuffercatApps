<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
    <ion-buttons slot="start">
    <ion-back-button default-href="/tabs/soon"></ion-back-button>
  </ion-buttons>
          <ion-title>Duo</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Duo</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-grid>
    <ion-row class="column-standard2">
      <ion-col class="bannerColumn">
        
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_Duo.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row style="padding: 0px; margin: 0px;">
            <ion-column style="padding: 0px; margin: 0px;"><p class="size-appname" style="padding: 0px; margin: 0px;"><strong>Duo</strong></p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><p class="size-appname-icon"></p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard2">
      <ion-col>
        <ion-button disabled="true" expand="full" shape="round" style="margin: 0px;">Coming Soon</ion-button>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Description</strong></h4>
        A vibrant, light and glowing duo-tone icon pack<br>
<br>
    </ion-col>
    </ion-row>
   <!-- <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Screenshots (early development)</strong></h4>
        <div class="scrollScreenshots">
        <img src="../assets/Screenshot_WallCat_1.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_2.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_3.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_4.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_5.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_6.jpg" class="screenshot">
        </div>
        <br>
    </ion-col>
    </ion-row>-->
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Links</strong></h4>
        <a href="mailto:puffercatt+duo@gmail.com" class="">E-mail</a>
        <br>
        <a href="https://pufferrom.t.me" class="">Telegram channel (releases)</a>
        <br>
        <a href="https://puffercatchannel.t.me" class="">Telegram channel (general)</a>
        <br>
        <a href="https://puffercatrom.t.me" class="">Support group</a>
        <br>
        <br>
    </ion-col>
    </ion-row>
  </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonGrid, IonRow, IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton,
      IonModal,
      IonItem,
      IonList,
      IonAvatar,
      IonImg,
      IonLabel } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  import { logoAndroid, arrowDown, logoPwa, ellipsisVertical } from 'ionicons/icons';
  
  export default  defineComponent({
    name: 'Tab1Page',
    components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCol, IonGrid, IonRow, IonButton, IonIcon, IonButtons, IonBackButton},
    setup() {
      return {
        logoAndroid,
        arrowDown,
        logoPwa,
        ellipsisVertical
      }
    }
  });
  </script>
  
  <style scoped>
    .column-standard {
      background-color: var(--ion-color-light-shade);
      color: var(--ion-color-light-contrast);
      padding: 15px;
      border-radius: 25px;
      margin: 5px;
      margin-top: 15px;
    } .icon {
      width: 90px;
      margin-right: 5px;
    } ion-button {
      --box-shadow: 0px;
    } .download-column {
      text-align: right;
      display: flex;
      justify-content: right;
      align-items: center;
    } .description-column {
      align-items: center;
    } .size-appname {
    font-size: 20px;
  } .size-appname-icon {
    font-size: 15px;
  } .logoAbout {
    width: 125px;
    margin: 10px;
    margin-top: 20px;
  } .modalContent {
    text-align: center;
      display: flex;
      justify-content: center;
  } .tableLabel {
    text-align: left;
  } .vueLogoLight {
    display: inline;
  } .vueLogoDark {
    display: none;
  } @media (prefers-color-scheme: dark) {
    .vueLogoLight {
      display: none;
    } .vueLogoDark {
      display: inline;
    }
  } .aboutFrameworkLogo {
    width: 175px;
  } .bannerColumn {
    height: 200px;
    background-image: url("../assets/Banner_Duo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 25px;
  } .column-standard2 {
      background-color: transparent;
      color: var(--ion-color-light-contrast);
    padding: 0px;
      border-radius: 25px;
      margin: 5px;
      margin-top: 15px;
    } ion-button {
    --box-shadow: 0px;
  } .screenshot {
    height: 600px;
    border-radius: 30px;
  } div.scrollScreenshots {
  overflow: auto;
  white-space: nowrap;
}

div.scrollScreenshots img {
  display: inline-block;
  padding: 10px;
} .hidden-link {
    text-decoration-line: none;
    color: var(--ion-color-light-contrast);
  }
  </style>