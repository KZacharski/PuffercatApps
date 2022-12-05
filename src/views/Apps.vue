<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary">
            <ion-button id="menu-trigger2">
      <ion-icon slot="icon-only" :icon="ellipsisVertical" ></ion-icon>
    </ion-button>
<ion-popover trigger="menu-trigger2" triggerAction="click">
  <ng-template>
    <ion-content>
      <ion-list>
        <ion-item :button="true" :detail="false" lines="none" id="open-about2">About</ion-item>
        </ion-list>
        <ion-modal ref="modal" trigger="open-about2">
        <ion-header>
          <ion-toolbar>
            <ion-title>About Puffercat Apps</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding modalContent">
          <img src="../assets/Icon_Puffercat_Apps.png" class="logoAbout">
          <h1>Puffercat Apps</h1>
          <h4>v0.0.1 alpha</h4>
          <br>
          <br>
          <div class="tableLabel">
          <ion-label color="medium" class="tableLabel" style="padding-left: 30px;">Made by Puffercat</ion-label>
          <ion-list :inset="true" style="border-radius: 25px;">
    <ion-item>
      <ion-label><a href="https://puffercat.xyz?utm_source=Puffercat+Apps">Website</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://twitter.com/@puffercatt">Twitter</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://mastodon.social/@puffercat">Mastodon</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://github.com/KZacharski">GitHub</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://puffercatchannel.t.me">Telegram channel</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://puffercat.t.me">Telegram profile</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="mailto:puffercatt+pufferapps@gmail.com">E-Mail</a></ion-label>
    </ion-item>
  </ion-list>
  <br>
  <ion-label color="medium" class="tableLabel" style="padding-left: 30px;">Made with</ion-label>
          <ion-list :inset="true" style="border-radius: 25px;">
    <ion-item>
      <ion-label><a href="https://vuejs.org/">
        <img src="../assets/Logo_Vue.png" class="vueLogoLight aboutFrameworkLogo">
        <img src="../assets/Logo_Vue_Dark.png" class="vueLogoDark aboutFrameworkLogo">
      </a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://ionicframework.com"><img src="../assets/Logo_Ionic.png" class="aboutFrameworkLogo"></a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://vercel.com/">
        <img src="../assets/Logo_Vercel.png" class="vueLogoLight aboutFrameworkLogo">
        <img src="../assets/Logo_Vercel_Dark.png" class="vueLogoDark aboutFrameworkLogo">
      </a></ion-label>
    </ion-item>
  </ion-list>
  <br><br><br>
  </div>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ng-template>
</ion-popover>
  </ion-buttons>
        <ion-title>Apps</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Apps</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
<ion-row class="column-standard">
    <ion-col size="auto">
      <a href="/details/PufferIcons"><img src="../assets/Icon_PufferIcons.png" class="icon"></a>
    </ion-col>
    <ion-col size="auto" class="description-column">
        <ion-row>
          <ion-column><a href="/details/PufferIcons" class="hidden-link"><h4 class="size-appname">PufferIcons</h4></a></ion-column>
        </ion-row>
        <ion-row>
          <a href="/details/PufferIcons"><ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon hidden-link"/></ion-column></a>
        </ion-row>
    </ion-col>
    <ion-col>

    </ion-col>
    <ion-col class="download-column">
      <ion-button shape="round" href="https://cdn.puffercat.xyz/c/puffericons/puffericons-1.1.4.apk"><ion-icon :icon="arrowDown" /></ion-button>
    </ion-col>
  </ion-row>
  <ion-row class="column-standard">
    <ion-col size="auto">
      <a href="/details/Puffercat_Apps"><img src="../assets/Icon_Puffercat_Apps.png" class="icon"></a>
    </ion-col>
    <ion-col size="auto" class="description-column">
        <ion-row>
          <a href="/details/Puffercat_Apps" class="hidden-link"><ion-column><h4 class="size-appname">Puffercat Apps</h4></ion-column></a>
        </ion-row>
        <ion-row>
          <a href="/details/Puffercat_Apps" class="hidden-link"><ion-column><ion-icon :icon="logoPwa" class="size-appname-icon"/></ion-column></a>
        </ion-row>
    </ion-col>
    <ion-col class="download-column">
      <ion-button shape="round" id="pufferAppsModalOpen"><ion-icon :icon="arrowDown" /></ion-button>
      <ion-modal ref="modal" trigger="pufferAppsModalOpen">
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
    <ion-col size="auto">
      <a href="/details/Shapes" class="hidden-link"><img src="../assets/Icon_Shapes.png" class="icon"></a>
    </ion-col>
    <ion-col size="auto" class="description-column">
        <ion-row>
          <a href="/details/Shapes" class="hidden-link"><ion-column><h4 class="size-appname">Shapes</h4></ion-column></a>
        </ion-row>
        <ion-row>
          <a href="/details/Shapes" class="hidden-link"><ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column></a>
        </ion-row>
    </ion-col>
    <ion-col class="download-column">
      <ion-button shape="round" href="https://cdn.puffercat.xyz/c/puffercat-apps/apks/Shapes/shapes-1.0.4.apk"><ion-icon :icon="arrowDown" /></ion-button>
    </ion-col>
  </ion-row>
  <ion-row class="column-standard">
    <ion-col size="auto">
      <a href="/details/Blurry_Wallpapers" class="hidden-link"><img src="../assets/Icon_Blurry.png" class="icon"></a>
    </ion-col>
    <ion-col size="auto" class="description-column">
        <ion-row>
          <a href="/details/Blurry_Wallpapers" class="hidden-link"><ion-column><h4 class="size-appname">Blurry Wallpapers</h4></ion-column></a>
        </ion-row>
        <ion-row>
          <a href="/details/Blurry_Wallpapers" class="hidden-link"><ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column></a>
        </ion-row>
    </ion-col>
    <ion-col class="download-column">
      <ion-button shape="round" href="https://cdn.puffercat.xyz/c/puffercat-apps/apks/Blurry_Wallpapers/blurry-wallpapers-1.0.3.apk"><ion-icon :icon="arrowDown" /></ion-button>
    </ion-col>
  </ion-row>
  <ion-row class="column-bottom">
    <ion-col size="auto">
      <a href="/details/Tipper_by_myCALC" class="hidden-link"><img src="../assets/Icon_Tipper.png" class="icon"></a>
    </ion-col>
    <ion-col size="auto" class="description-column">
        <ion-row>
          <a href="/details/Tipper_by_myCALC" class="hidden-link"><ion-column><h4 class="size-appname">Tipper by myCALC</h4></ion-column></a>
        </ion-row>
        <ion-row>
          <a href="/details/Tipper_by_myCALC" class="hidden-link"><ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column></a>
        </ion-row>
    </ion-col>
    <ion-col class="download-column">
      <ion-button shape="round" href="https://cdn.puffercat.xyz/c/puffercat-apps/apks/Tipper_by_myCALC/tipper-by-mycalc-1.1-dev.apk"><ion-icon :icon="arrowDown" /></ion-button>
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
    IonLabel, IonPopover } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { logoAndroid, arrowDown, logoPwa, ellipsisVertical } from 'ionicons/icons';

export default  defineComponent({
  name: 'Tab1Page',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCol, IonGrid, IonRow, IonButton, IonButtons, IonIcon,
      IonModal,
      IonItem,
      IonList, IonPopover },
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
} .column-bottom {
    background-color: var(--ion-color-light-shade);
    color: var(--ion-color-light-contrast);
    padding: 15px;
    border-radius: 25px;
    margin: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
  } .hidden-link {
    text-decoration-line: none;
    color: var(--ion-color-light-contrast);
  } .installGuideImage {
    height: auto;
    width: 300px;
    border-radius: 20px;
  }
</style>