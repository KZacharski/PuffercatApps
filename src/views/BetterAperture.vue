<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
    <ion-buttons slot="start">
    <ion-back-button default-href="/"></ion-back-button>
  </ion-buttons>
          <ion-title>BetterAperture</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">BetterAperture</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-grid>
    <ion-row class="column-standard2">
      <ion-col class="bannerColumn">
        
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_BetterAperture.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row style="padding: 0px; margin: 0px;">
            <ion-column style="padding: 0px; margin: 0px;"><p class="size-appname" style="padding: 0px; margin: 0px;"><strong>BetterAperture</strong></p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><p class="size-appname-icon">version 1.0.0</p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard2">
      <ion-col>
        <ion-button href="https://cdn.puffercat.xyz/c/puffercat-apps/apks/BetterAperture/betteraperture-1.0.0.apk" expand="full" shape="round" style="margin: 0px;" download="BetterAperture-latest.apk">Download</ion-button>
      </ion-col>
      <ion-col>
        <ion-button href="" disabled="true" expand="full" shape="round" style="margin: 0px;">Google Play</ion-button>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Changelog - 1.0.0</strong></h4>
        <ul>
            <li>Initial release</li>
        </ul>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Description</strong></h4>
        The app cointains 100+ icons designed to replace the ugly icon of the LineageOS camera.<br>
<br>
If your launcher supports manual icon selection, you can also apply the icons to other camera apps.<br>
<br>
If you want to use a different icon than the default one with a launcher that doesn't support manual icon selection, check for a single icon variant here: <a href="https://github.com/KZacharski/BetterAperture/wiki/Single-icon-packages">https://github.com/KZacharski/BetterAperture/wiki/Single-icon-packages</a><br>
<br>
Included icon categories:<br>
- Gradient<br>
- Duotone<br>
- Aosp<br>
- Flat<br>
- Classic<br>
<br>
Join the support group on Telegram: <a href="https://puffercatrom.t.me">https://puffercatrom.t.me</a><br>
<br>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Screenshots</strong></h4>
        <div class="scrollScreenshots">
        <img src="../assets/Screenshot_BetterAperture_1.png" class="screenshot">
        <img src="../assets/Screenshot_BetterAperture_2.png" class="screenshot">
        <img src="../assets/Screenshot_BetterAperture_3.png" class="screenshot">
        <img src="../assets/Screenshot_BetterAperture_4.png" class="screenshot">
        <img src="../assets/Screenshot_BetterAperture_5.png" class="screenshot">
        <img src="../assets/Screenshot_BetterAperture_6.png" class="screenshot">
        <img src="../assets/Screenshot_BetterAperture_7.png" class="screenshot">
        </div>
        <br>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Links</strong></h4>
        <a href="https://github.com/KZacharski/BetterAperture/wiki/Single-icon-packages" class="">Single icon packages</a>
        <br>
        <a href="mailto:puffercatt+betteraperture@gmail.com" class="">E-mail</a>
        <br>
        <a href="https://cdn.puffercat.xyz/c/betteraperture/privacy" class="">Privacy policy</a>
        <br>
        <a href="https://pufferrom.t.me" class="">Telegram channel (releases)</a>
        <br>
        <a href="https://puffercatchannel.t.me" class="">Telegram channel (general)</a>
        <br>
        <a href="https://puffercatrom.t.me" class="">Support group</a>
        <br>
        <a href="https://github.com/KZacharski/BetterAperture" class="">GitHub repo</a>
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
    background-image: url("../assets/Banner_BetterAperture.png");
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