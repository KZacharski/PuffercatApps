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
          <h4>v1.0.0-b6 (Beta 6)</h4>
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
        <ion-title>Coming Soon</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Coming Soon</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row class="column-standard">
    <ion-col size="auto" button @click="() => router.push('/details/PufferIcons_Filled')">
      <img src="../assets/Icon_PufferIcons_Filled.png" class="icon">
    </ion-col>
    <ion-col size="auto" class="description-column" button @click="() => router.push('/details/PufferIcons_Filled')">
        <ion-row>
          <ion-column><h4 class="size-appname">PufferIcons Filled</h4></ion-column>
        </ion-row>
        <ion-row>
          <ion-column button @click="() => router.push('/details/PufferIcons_Filled')"><ion-icon :icon="logoAndroid" class="size-appname-icon hidden-link"/></ion-column>
        </ion-row>
    </ion-col>
    <ion-col>

    </ion-col>
    <ion-col class="download-column">
      <ion-button shape="round" disabled="true"><ion-icon :icon="arrowDown" /></ion-button>
    </ion-col>
  </ion-row>
  
  <ion-row class="column-standard">
    <ion-col size="auto" button @click="() => router.push('/details/Duo')">
      <img src="../assets/Icon_Duo.png" class="icon">
    </ion-col>
    <ion-col size="auto" class="description-column" button @click="() => router.push('/details/Duo')">
        <ion-row>
          <ion-column><h4 class="size-appname">Duo</h4></ion-column>
        </ion-row>
        <ion-row>
          <ion-column button @click="() => router.push('/details/Duo')"><ion-icon :icon="logoAndroid" class="size-appname-icon hidden-link"/></ion-column>
        </ion-row>
    </ion-col>
    <ion-col>

    </ion-col>
    <ion-col class="download-column">
      <ion-button shape="round" disabled="true"><ion-icon :icon="arrowDown" /></ion-button>
    </ion-col>
  </ion-row>

  
</ion-grid>
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
import { logoAndroid, arrowDown, logoPwa, ellipsisVertical } from 'ionicons/icons';
import { useRouter } from 'vue-router';

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
} @media (prefers-color-scheme: dark) {
  .vueLogoLight {
    display: none;
  } .vueLogoDark {
    display: inline;
  }
} .aboutFrameworkLogo {
  width: 175px;
} .hidden-link {
    text-decoration-line: none;
    color: var(--ion-color-light-contrast);
  }
</style>