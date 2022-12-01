<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
    <ion-buttons slot="start">
    <ion-back-button default-href="#"></ion-back-button>
  </ion-buttons>
          <ion-title>PufferIcons</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-buttons slot="start">
    <ion-back-button default-href="#"></ion-back-button>
  </ion-buttons>
            <ion-title size="large">PufferIcons</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-grid>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_PufferIcons.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row>
            <ion-column><h4 class="size-appname">PufferIcons</h4></ion-column>
          </ion-row>
          <ion-row>
            <ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
      <ion-col class="download-column">
        <ion-button shape="round"><ion-icon :icon="arrowDown" /></ion-button>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_Puffercat_Apps.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row>
            <ion-column><h4 class="size-appname">Puffercat Apps</h4></ion-column>
          </ion-row>
          <ion-row>
            <ion-column><ion-icon :icon="logoPwa" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
      <ion-col class="download-column">
        <ion-button shape="round"><ion-icon :icon="arrowDown" /></ion-button>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_Shapes.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row>
            <ion-column><h4 class="size-appname">Shapes</h4></ion-column>
          </ion-row>
          <ion-row>
            <ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
      <ion-col class="download-column">
        <ion-button shape="round"><ion-icon :icon="arrowDown" /></ion-button>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_Blurry.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row>
            <ion-column><h4 class="size-appname">Blurry Wallpapers</h4></ion-column>
          </ion-row>
          <ion-row>
            <ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
      <ion-col class="download-column">
        <ion-button shape="round"><ion-icon :icon="arrowDown" /></ion-button>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_Tipper.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row>
            <ion-column><h4 class="size-appname">Tipper by myCALC</h4></ion-column>
          </ion-row>
          <ion-row>
            <ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
      <ion-col class="download-column">
        <ion-button shape="round"><ion-icon :icon="arrowDown" /></ion-button>
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
    components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCol, IonGrid, IonRow, IonButton, IonIcon, IonButtons},
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
      width: 70px;
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
    font-size: 18px;
  } .size-appname-icon {
    font-size: 18px;
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
  }
  </style>