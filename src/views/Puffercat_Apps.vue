<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
    <ion-buttons slot="start">
    <ion-back-button default-href="/"></ion-back-button>
  </ion-buttons>
          <ion-title>Puffercat Apps</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Puffercat Apps</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-grid>
    <ion-row class="column-standard2">
      <ion-col class="bannerColumn">
        
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_Puffercat_Apps.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row style="padding: 0px; margin: 0px;">
            <ion-column style="padding: 0px; margin: 0px;"><p class="size-appname" style="padding: 0px; margin: 0px;"><strong>Puffercat Apps</strong></p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><p class="size-appname-icon">version 1.0.0-b3 (Beta 3)</p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><ion-icon :icon="logoPwa" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard2">
      <ion-col>
        <ion-button id="installPuffercatApps_AppPage" expand="full" shape="round" style="margin: 0px;">Download</ion-button>
        <ion-modal ref="modal" trigger="installPuffercatApps_AppPage">
        <ion-header>
          <ion-toolbar>
            <ion-title>Install Puffercat Apps</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h2>Guide for Chrome for Android</h2>
          <h4>For other browsers, search "Install PWA [name of your browser]" in your search engine of choice</h4>
            <p>1. Go to "<a href="https://apps.puffercat.xyz">https://apps.puffercat.xyz</a>".</p>
            <img src="../assets/Puffercat_Apps_Guide_1.png" class="installGuideImage">
            <p>2. Open the menu (on the browser's bar, not on the website)</p>
            <img src="../assets/Puffercat_Apps_Guide_2.png" class="installGuideImage">
            <p>3. Select "Install app" or "Add to home screen"</p>
            <img src="../assets/Puffercat_Apps_Guide_3.png" class="installGuideImage">
            <p>4. Select "Install"</p>
            <img src="../assets/Puffercat_Apps_Guide_4.png" class="installGuideImage">
            <p>5. Done. You should get this notification and a new icon should show up on your home screen</p>
            <img src="../assets/Puffercat_Apps_Guide_5.png" class="installGuideImage">
            <img src="../assets/Puffercat_Apps_Guide_6.png" class="installGuideImage">
            <br><br><br><br><br><br>
        </ion-content>
      </ion-modal>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Changelog - 1.0.0-b3</strong></h4>
        <ul>
            <li>Added a Google Play link to BetterAperture</li>
            <li>Added Duo</li>
            <li>Fixed a dependency security vulnerability</li>
        </ul>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Description</strong></h4>
The full catalog of apps created by Puffercat as well as ones currently in development. If you don't have access to Google Play store on your device, you can download all of my Android apps here, from the official source.<br>
<br>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Screenshots</strong></h4>
        <div class="scrollScreenshots">
        <img src="../assets/Screenshot_Puffercat_Apps_1.png" class="screenshot">
        <img src="../assets/Screenshot_Puffercat_Apps_2.png" class="screenshot">
        <img src="../assets/Screenshot_Puffercat_Apps_3.png" class="screenshot">
        <img src="../assets/Screenshot_Puffercat_Apps_4.png" class="screenshot">
        <img src="../assets/Screenshot_Puffercat_Apps_5.png" class="screenshot">
        <img src="../assets/Screenshot_Puffercat_Apps_6.png" class="screenshot">
        <img src="../assets/Screenshot_Puffercat_Apps_7.png" class="screenshot">
        <img src="../assets/Screenshot_Puffercat_Apps_8.png" class="screenshot">
        </div>
        <br>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Links</strong></h4>
        <a href="https://apps.puffercat.xyz" class="">Website</a>
        <br>
        <a href="https://puffercatchannel.t.me" class="">Telegram channel</a>
        <br>
        <a href="https://pufferchat.t.me" class="">Telegram chat</a>
        <br>
        <a href="https://puffercat.t.me" class="">Telegram DM</a>
        <br>
        <a href="https://twitter.com/@puffercatt" class="">Twitter</a>
        <br>
        <a href="mailto:puffercatt+pufferapps@gmail.com" class="">E-mail</a>
        <br>
        <a href="https://github.com/KZacharski/PuffercatApps" class="">GitHub repo</a>
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
    components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCol, IonGrid, IonRow, IonButton, IonIcon, IonButtons, IonBackButton, IonModal},
    setup() {
      return {
        logoAndroid,
        arrowDown,
        logoPwa,
        ellipsisVertical
      }
    },
    methods: {
      dismiss() {
        (this.$refs.modal as InstanceType<typeof IonModal>).$el.dismiss();
      },
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
    height: 500px;
    background-image: url("../assets/Banner_Puffercat_Apps.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 25px;
  }
  @media screen and (max-width: 850px) {
    .bannerColumn {
        height: 200px;
    }
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
  } .installGuideImage {
    height: auto;
    width: 300px;
    border-radius: 20px;
  }
  </style>