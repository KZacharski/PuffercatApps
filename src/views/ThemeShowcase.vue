<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
    <ion-buttons slot="start">
    <ion-back-button default-href="/"></ion-back-button>
  </ion-buttons>
          <ion-title>ThemeShowcase</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">ThemeShowcase</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-grid>
    <ion-row class="column-standard2">
      <ion-col class="bannerColumn">
        
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_ThemeShowcase.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row style="padding: 0px; margin: 0px;">
            <ion-column style="padding: 0px; margin: 0px;"><p class="size-appname" style="padding: 0px; margin: 0px;"><strong>ThemeShowcase</strong></p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><p class="size-appname-icon">version 1.0 (Beta 2)</p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard2">
      <ion-col>
        <ion-button href="https://f2.puffercat.xyz/PuffercatApps/ThemeShowcase-1.0b2.apk" expand="full" shape="round" style="margin: 0px;" download="PufferIcons-latest.apk">Download</ion-button>
      </ion-col>
    </ion-row>
    <ion-row class="column-extension">
      <ion-col>
        <ion-button id="alternateMirrors_ThemeShowcase" expand="full" shape="round" style="margin: 0px;">Alternate mirrors</ion-button>
      </ion-col>
      <ion-col>
        <ion-button id="googlePlayEA_ThemeShowcase" expand="full" shape="round" style="margin: 0px;">Google Play</ion-button>
      </ion-col>
    </ion-row>
    <ion-modal ref="modal" trigger="alternateMirrors_ThemeShowcase">
        <ion-header>
          <ion-toolbar>
            <ion-title>Alternate mirrors</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h2 style="padding-left: 30px;">ThemeShowcase 1.0 (Beta 2)</h2>
          <ion-label color="medium" class="tableLabel checksum" style="padding-left: 30px;">SHA256 Checksum: cb28eee022526c9745ebfe815060a090e59f5b48af15483afdd51e6b8c1b9f23</ion-label>
          <ion-list :inset="true" style="border-radius: 25px;">
    <ion-item>
      <ion-label><a href="https://f2.puffercat.xyz/PuffercatApps/ThemeShowcase-1.0b2.apk">🇩🇪 2.puffercat.xyz - Contabo (Default)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://cdn.puffercat.xyz/c/puffercat-apps/apks/ThemeShowcase/ThemeShowcase-1.0b2.apk">🇳🇱 puffercat.xyz - DigitalOcean</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://deimos.pufferc.at/mirror/ThemeShowcase-1.0b2.apk">🇸🇪 deimos.pufferc.at - aeza</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://www.icloud.com/iclouddrive/0dc1MKbkknpFfAndorZ-BBdTA#ThemeShowcase-1">iCloud Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://1drv.ms/u/c/c6bbfc602e5efcd0/IQBWjyBlxrLWTp5ikzDVOw_zAdb6H5A05w8fVpz5PgxtmeE?e=UMl3hb">OneDrive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://drive.google.com/file/d/1GROivf_X95xFE66lOrTHbSZMrHsDM0we/view?usp=share_link">Google Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.baidu.com/s/12kjAce8f3NxYGxK-OU0alw?pwd=ztzs">百度网盘 (提取码：ztzs)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://disk.yandex.ru/d/RFrpDvjxJyQqcg">Яндекс Диск</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://www.dropbox.com/scl/fi/5kavzp5397ztug2o9d18a/ThemeShowcase-1.0b2.apk?rlkey=tkbaf8ts5bl5ipol5u3r8sgnk&st=k4u1n12s&dl=0">Dropbox</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://app.box.com/s/of7hu7p6hceyk6xvsng7dtorkawthz6y">Box</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://drive.proton.me/urls/H82GV8YBPM#Wmre4qOZzODv">Proton Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.xunlei.com/s/VOrBPeGkXa4i9wv-zl6Bp9utA1?pwd=gjwj">迅雷云盘 (提取码：gjwj)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://1024terabox.com/s/1CTwe27O0aBY2Q1asgBBAQw">Terabox</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://mega.nz/file/q5wVBKiT#29V11ruNfsvxMc_e8QjDofAtdKJhVaYJdQrxQiInwz8">MEGA</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.quark.cn/s/12099dbf747f">夸克网盘</a></ion-label>
    </ion-item>
  </ion-list>
  <h2 style="padding-left: 30px;">ThemeShowcase 1.0 (Beta 1)</h2>
  <ion-label color="medium" class="tableLabel" style="padding-left: 30px;">SHA256 Checksum: 9bbecb33d577e1dfb26491f456eed75f1658c91a95a74a2c3806b679a1b2ac26</ion-label>
          <ion-list :inset="true" style="border-radius: 25px;">
    <ion-item>
      <ion-label><a href="https://f2.puffercat.xyz/PuffercatApps/ThemeShowcase-1.0b.apk">🇩🇪 2.puffercat.xyz - Contabo (Default)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://cdn.puffercat.xyz/c/puffercat-apps/apks/ThemeShowcase/ThemeShowcase-1.0b.apk">🇳🇱 puffercat.xyz - DigitalOcean</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://deimos.pufferc.at/mirror/ThemeShowcase-1.0b.apk">🇸🇪 deimos.pufferc.at - aeza</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://www.icloud.com/iclouddrive/06esiWCsrhr8f2YHXx0UjIiSA#ThemeShowcase-1">iCloud Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://1drv.ms/u/c/c6bbfc602e5efcd0/IQDW4qjhuycJSp-4Mqfr11lYAUYO-iEoIbsWlzBB-Pyk-tg?e=aLRQTX">OneDrive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://drive.google.com/file/d/1AauWIG6HuEHoVzoDx-g7TsJL1e8ryPch/view?usp=share_link">Google Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.baidu.com/s/1RGYat1gN9Tr3PALx_uJPMw?pwd=ztzs">百度网盘 (提取码：ztzs)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://disk.yandex.ru/d/rkn4wXI5cwk3og">Яндекс Диск</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://www.dropbox.com/scl/fi/yvzjcbwpn2p5ko2ni2kph/ThemeShowcase-1.0b.apk?rlkey=mdz2d6srgmkglo071pgy8kewe&st=jy7xgo9w&dl=0">Dropbox</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://app.box.com/s/2paombc0rin2fwua6ymrslnl5p6appmn">Box</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://drive.proton.me/urls/R31K5G9DCG#30J7GaScLdp2">Proton Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.xunlei.com/s/VOrBPj5FhnZ2OUODS3GovMCFA1?pwd=zyyc">迅雷云盘 (提取码：zyyc)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://1024terabox.com/s/19ttrqa8gnrPAWloC98dtRQ">Terabox</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://mega.nz/file/utgCHLZb#30Lo_t_RcJTv1pQOEcMR6A9m-djWK92MOGDzwQ9crUY">MEGA</a></ion-label>
    </ion-item>
     <ion-item>
      <ion-label><a href="https://pan.quark.cn/s/63945f16a0b7">夸克网盘</a></ion-label>
    </ion-item>
  </ion-list>
  <br>
        </ion-content>
      </ion-modal>
      <ion-modal ref="modal2" trigger="googlePlayEA_ThemeShowcase">
        <ion-header>
          <ion-toolbar>
            <ion-title>Google Play Early Access</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss2()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
        <p class="guideTextRegular">Due to Google's "production application" requirements, this app is not yet able to be published on Google Play. You can join the closed testing program to access the app now and help fulfill the requirements to get fully published.</p>
          <div class="guideNumberBackground">1</div>
          <div class="guideSectionContainer">
            <div class="guideSectionLineContainer">
              <div class="guideSectionline"></div>
            </div>
            <div class="guideSectionContent">
              <p class="guideTextRegular">Join <a href="https://groups.google.com/g/pfrmedia-beta">this</a> Google group. Make sure you're using the same Google account as the one you'll download the app on.</p>
              <img src="../assets/WallCat_GPLAY_Guide_1.png" class="guideImage">
            </div>
          </div>
          <div class="guideNumberBackground">2</div>
          <div class="guideSectionContainer">
            <div class="guideSectionLineContainer">
              <div class="guideSectionline"></div>
            </div>
            <div class="guideSectionContent">
              <p class="guideTextRegular">Go <a href="https://play.google.com/store/apps/details?id=xyz.puffercat.themeshowcase">here</a> to download the app. Ensure the account you're using on Google Play is the same one you joined the group on.</p>
              <img src="../assets/ThemeShowcase_GPLAY_Guide_2.jpg" class="guideImage">
            </div>
          </div>
          <div class="guideNumberBackground">3</div>
          <div class="guideSectionContainer">
            <div class="guideSectionLineContainer">
              <div class="guideSectionline"></div>
            </div>
            <div class="guideSectionContent">
              <p class="guideTextRegular">Please use the "Private feedback to developer" function to help the app get published (Google uses this as a metric of app's production readiness)</p>
              <img src="../assets/ThemeShowcase_GPLAY_Guide_3.png" class="guideImage">
            </div>
          </div>
        </ion-content>
      </ion-modal>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Changelog - 1.0 (Beta 2)</strong></h4>
        <ul>
            <li>Updated target Android version to comply with Google Play requirements</li>
            <li>First release on Google Play</li>
        </ul>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Description</strong></h4>
        <p>ThemeShowcase is an app that allows you to preview all standard themes for XML layouts.</p>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Screenshots</strong></h4>
        <div class="scrollScreenshots">
        <img src="../assets/Screenshot_ThemeShowcase_1.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_2.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_3.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_4.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_5.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_6.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_7.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_8.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_9.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_10.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_11.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_12.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_13.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_14.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_15.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_16.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_17.png" class="screenshot">
        <img src="../assets/Screenshot_ThemeShowcase_18.png" class="screenshot">
        </div>
        <br>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Links</strong></h4>
        <a href="https://pufferrom.t.me" class="">Telegram channel (releases)</a>
        <br>
        <a href="https://puffercatchannel.t.me" class="">Telegram channel (general)</a>
        <br>
        <a href="https://puffercatrom.t.me" class="">Support group</a>
        <br>
        <a href="https://github.com/KZacharski/ThemeShowcase" class="">GitHub repo (coming soon)</a>
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
      dismiss2() {
        (this.$refs.modal2 as InstanceType<typeof IonModal>).$el.dismiss();
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
  }
  .bannerColumn {
    height: 500px;
    background-image: url("../assets/Banner_ThemeShowcase.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 25px;
  }
  @media screen and (max-width: 850px) {
    .bannerColumn {
        height: 200px;
    }
}
  .column-standard2 {
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
  } .guideNumberBackground {
    background-image: linear-gradient(to bottom, #33D198, #06986A);
    height: 50px;
    width: 50px;
    border-radius: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 30px;
    font-weight: bold;
    box-shadow: #06986a 0px 2px 10px;
    color: white;
  } .guideSectionline {
    height: 100%;
    width: 2px;
    background-color: #33D198;
  } .guideSectionLineContainer {
    width: 50px;
    min-width: 50px;
    display: flex;
    justify-content: center;
  } .guideSectionContainer {
    display: flex;
    flex-direction: row;
  } .guideTextRegular {
    font-size: 20px;
  } .guideSectionContent {
    width: 100%;
  } .checksum {
    font-family: monospace;
  } .guideImage {
    height: auto;
    width: 300px;
    border-radius: 20px;
  } .column-extension {
      background-color: transparent;
      color: var(--ion-color-light-contrast);
    padding: 0px;
      border-radius: 25px;
      margin: 5px;
      margin-top: 5px;
    }
  </style>