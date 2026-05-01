<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary">
            <ion-button id="menu-trigger">
      <ion-icon slot="icon-only" :icon="ellipsisVertical" ></ion-icon>
    </ion-button>
<ion-popover trigger="menu-trigger" triggerAction="click">
  <ng-template>
    <ion-content>
      <ion-list>
        <ion-item :button="true" :detail="false" lines="none" id="open-about">About</ion-item>
        </ion-list>
        <ion-modal ref="modal" trigger="open-about">
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
          <h4>v1.0.0-b7 (Beta 7)</h4>
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
      <ion-label><a href="mailto:apps@puffercat.xyz">E-Mail</a></ion-label>
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
      <ion-label><a href="https://netlify.com"><img src="../assets/Logo_Netlify.png" class="aboutFrameworkLogo"></a></ion-label>
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
        <ion-title>Coming Soon</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Coming Soon</ion-title>
        </ion-toolbar>
      </ion-header>
        <ion-content class="ion-padding emptyStateContainer">
        <div class="emptyStateContainer">
        <div class="emptyStateContent">
        <ion-icon slot="icon-only" :icon="timeOutline" class="emptyStateIcon"></ion-icon>
        <h3 class="emptyStateText">No upcoming apps</h3>
        </div>
        </div>
        </ion-content>
    </ion-content>
  </ion-page>
</template>



<script setup lang="ts">


const router = useRouter();
</script>

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
import { logoAndroid, arrowDown, logoPwa, ellipsisVertical, timeOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

export default defineComponent ({
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
} .aboutFrameworkLogo {
  width: 175px;
} .hidden-link {
    text-decoration-line: none;
    color: var(--ion-color-light-contrast);
  }
  .emptyStateContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  } .emptyStateContent {
    display: flex;
    flex-direction: column;
     align-items: center;
    justify-content: center;
  } .emptyStateIcon {
    font-size:125px;
    color: #B7B7B7;
  } .emptyStateText {
    font-size: 30px;
    color: #B7B7B7;
  }
 @media (prefers-color-scheme: dark) {
  .vueLogoLight {
    display: none;
  } .vueLogoDark {
    display: inline;
  } .emptyStateIcon {
    color: #4e4e4e;
  } .emptyStateText {
    color: #4e4e4e;
  }
} 
</style>