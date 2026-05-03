<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
    <ion-buttons slot="start">
    <ion-back-button default-href="/"></ion-back-button>
  </ion-buttons>
          <ion-title>WallCat</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">WallCat</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-grid>
    <ion-row class="column-standard2">
      <ion-col class="bannerColumn">
      </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col size="auto">
        <img src="../assets/Icon_WallCat.png" class="icon">
      </ion-col>
      <ion-col size="auto" class="description-column">
          <ion-row style="padding: 0px; margin: 0px;">
            <ion-column style="padding: 0px; margin: 0px;"><p class="size-appname" style="padding: 0px; margin: 0px;"><strong>WallCat</strong></p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><p class="size-appname-icon">version 1.0.1</p></ion-column>
          </ion-row>
          <ion-row style="padding: 0px;">
            <ion-column><ion-icon :icon="logoAndroid" class="size-appname-icon"/></ion-column>
          </ion-row>
      </ion-col>
    </ion-row>
    <ion-row class="column-standard2">
      <ion-col>
        <ion-button href="https://f2.puffercat.xyz/PuffercatApps/WallCat-1.0.1.apk" expand="full" shape="round" style="margin: 0px;" download="WallCat-latest.apk">Download</ion-button>
      </ion-col>
      <ion-col>
        <ion-button id="alternateMirrors_WallCat" expand="full" shape="round" style="margin: 0px;">Alternate mirrors</ion-button>
      </ion-col>
    </ion-row>
    <ion-row class="column-extension">
      <ion-col>
        <ion-button id="googlePlayEA_WallCat" expand="full" shape="round" style="margin: 0px;">Google Play</ion-button>
      </ion-col>
      <ion-col>
        <ion-button href="https://pfr.cat/out/hwwc?utm_source=puffercatapps" expand="full" shape="round" style="margin: 0px;">Huawei AppGallery</ion-button>
      </ion-col>
    </ion-row>
    <ion-modal ref="modal" trigger="alternateMirrors_WallCat">
        <ion-header>
          <ion-toolbar>
            <ion-title>Alternate mirrors</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h2 style="padding-left: 30px;">WallCat 1.0.1</h2>
          <ion-label color="medium" class="tableLabel checksum" style="padding-left: 30px;">SHA256 Checksum: 14e8a11e5d5c7fcee7fd9bc3cda1e0fd838f8de8fad2b76ceed1adfd42c8904d</ion-label>
          <ion-list :inset="true" style="border-radius: 25px;">
    <ion-item>
      <ion-label><a href="https://f2.puffercat.xyz/PuffercatApps/WallCat-1.0.1.apk">🇩🇪 2.puffercat.xyz - Contabo (Default)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://cdn.puffercat.xyz/c/puffercat-apps/apks/WallCat/WallCat-1.0.1.apk">🇳🇱 puffercat.xyz - DigitalOcean</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://deimos.pufferc.at/mirror/WallCat-1.0.1.apk">🇸🇪 deimos.pufferc.at - aeza</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://www.icloud.com/iclouddrive/0d2SL-WxHw7dBwlV_t5ZPAEpQ#WallCat-1.0">iCloud Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://1drv.ms/u/c/c6bbfc602e5efcd0/IQBctXMDf9yJRoDbmIFGm-KPAfPU47FnwZOhblk60lZ9yas?e=pGD23i">OneDrive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://drive.google.com/file/d/1AWPu8U4ovSQxka88Bh_NA3CSlgMEfL2I/view?usp=share_link">Google Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.baidu.com/s/1D6vWEnmzL_i0YZlrLyTwYw?pwd=wall">百度网盘 (提取码：wall)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://disk.yandex.ru/d/9VehTxAMUmrfzQ">Яндекс Диск</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://www.dropbox.com/scl/fi/hcr8w738c097i8ezm137s/WallCat-1.0.1.apk?rlkey=l13twc95c14tzsnk7zge2ng25&e=1&st=mq0thlil&bmus=1&dl=0">Dropbox</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://app.box.com/s/ccbob8n62hjp10pztr2yp9kxk11fqtsf">Box</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://drive.proton.me/urls/0DK70Z0W8W#N2nfQutAxaGU">Proton Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.xunlei.com/s/VOqblom-krpxYVdRXssZoIKpA1?pwd=hwqu">迅雷云盘 (提取码：hwqu)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://1024terabox.com/s/1boNL4z2-cHZ7ddda1QykVg">Terabox</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://mega.nz/file/KtIRhZpC#YlAZsk1KiVVX_3QfIzokjDIFk0-7KPxgyM3QR4T_Dy8">MEGA</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.quark.cn/s/ffaf9a924042">夸克网盘</a></ion-label>
    </ion-item>
  </ion-list>
  <h2 style="padding-left: 30px;">WallCat 1.0.0</h2>
  <ion-label color="medium" class="tableLabel" style="padding-left: 30px;">SHA256 Checksum: b1159ec3a89e5bce08df76a8c7a151d8a7965ddbcc868be7ab0392ff08e3e6db</ion-label>
          <ion-list :inset="true" style="border-radius: 25px;">
    <ion-item>
      <ion-label><a href="https://f2.puffercat.xyz/PuffercatApps/WallCat-1.0.apk">🇩🇪 2.puffercat.xyz - Contabo (Default)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://cdn.puffercat.xyz/c/puffercat-apps/apks/WallCat/WallCat-1.0.apk">🇳🇱 puffercat.xyz - DigitalOcean</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://deimos.pufferc.at/mirror/WallCat-1.0.apk">🇸🇪 deimos.pufferc.at - aeza</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://www.icloud.com/iclouddrive/071WiIXKqfEbErB8uwMpQsZ_A#WallCat-1">iCloud Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://1drv.ms/u/c/c6bbfc602e5efcd0/Eafn9A-CP-pFrxUdxGdbMLEBdyDYUO_S0fmiNEKWMdRrNQ">OneDrive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://drive.google.com/file/d/1dNoPjL0bPx5ewFl61vpQanHHPBflsWdL/view?usp=share_link">Google Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.baidu.com/s/1e_aJvbCUZthaGvBFOS5HhA?pwd=wall">百度网盘 (提取码：wall)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://disk.yandex.ru/d/vA-UW4VqIEx5Wg">Яндекс Диск</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://www.dropbox.com/scl/fi/19gutjtv8gson039k4akh/WallCat-1.0.apk?rlkey=mpgdljgz4mgf9ydp1zsp4tpz6&st=uoh44c0i&dl=0">Dropbox</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://app.box.com/s/q8pdckfn4ltdkrw8w4ybeq0wysx12m5g">Box</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://drive.proton.me/urls/2QBSGT252R#le16Bsi3CqlN">Proton Drive</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://pan.xunlei.com/s/VOP62jYPNlevTgYvIlxZ-mznA1?pwd=dexu">迅雷云盘 (提取码：dexu)</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://1024terabox.com/s/1pKUQkFv9ttsFOc2EgXy5Lw">Terabox</a></ion-label>
    </ion-item>
    <ion-item>
      <ion-label><a href="https://mega.nz/file/DwxnwLIS#BQwbFp9QZlT25Lb476UJX6__9-XCwTJd1VfHJ5hnFTo">MEGA</a></ion-label>
    </ion-item>
     <ion-item>
      <ion-label><a href="https://pan.quark.cn/s/4944d7713e68">夸克网盘</a></ion-label>
    </ion-item>
  </ion-list>
  <br>
        </ion-content>
      </ion-modal>
      <ion-modal ref="modal2" trigger="googlePlayEA_WallCat">
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
              <p class="guideTextRegular">Go <a href="https://play.google.com/store/apps/details?id=xyz.puffercat.wallcat">here</a> to download the app. Ensure the account you're using on Google Play is the same one you joined the group on.</p>
              <img src="../assets/WallCat_GPLAY_Guide_2.png" class="guideImage">
            </div>
          </div>
          <div class="guideNumberBackground">3</div>
          <div class="guideSectionContainer">
            <div class="guideSectionLineContainer">
              <div class="guideSectionline"></div>
            </div>
            <div class="guideSectionContent">
              <p class="guideTextRegular">Please use the "Private feedback to developer" function to help the app get published (Google uses this as a metric of app's production readiness)</p>
              <img src="../assets/WallCat_GPLAY_Guide_3.png" class="guideImage">
            </div>
          </div>
        </ion-content>
      </ion-modal>
      <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Changelog - 1.0.1</strong></h4>
        <ul>
            <li>Updated Frames dashboard from v3.6.2 to v3.7.0</li>
            <li>First release on Google Play and AppGallery</li>
            <li>Last release to support Android 5 due to Frames dashboard dropping Android 5 in version 3.7.1 :(</li>
        </ul>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Description</strong></h4>
        A wallpaper app by Puffercat<br>
        <br>
        Includes collections:<br>
        • Smudges<br>
        • Landscapes<br>
        • Waves<br>
        • Beam<br>
        • Glass<br>
        • Depth<br>
        • Flat shapes<br>
        • Photo<br>
        • Aurora<br>
        • Glow<br>
        As well as some wallpapers I made for my other projects<br>
<br>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Screenshots</strong></h4>
        <div class="scrollScreenshots">
        <img src="../assets/Screenshot_WallCat_1.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_2.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_3.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_4.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_5.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_6.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_7.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_8.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_9.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_10.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_11.png" class="screenshot">
        <img src="../assets/Screenshot_WallCat_12.png" class="screenshot">
        </div>
        <br>
    </ion-col>
    </ion-row>
    <ion-row class="column-standard">
      <ion-col>
        <h4><strong>Links</strong></h4>
        <a href="https://wallcat.app?utm_source=PuffercatApps" class="">Website</a>
        <br>
        <a href="mailto:meow@wallcat.app" class="">E-mail</a>
        <br>
        <a href="https://twitter.com/WallCatApp" class="">Twitter</a>
        <br>
        <a href="https://wallcat.app/privacy">Privacy Policy</a>
        <br>
        <a href="https://wallcat.app/tos">Terms of Service</a>
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
  } .bannerColumn {
    height: 500px;
    background-image: url("../assets/Banner_WallCat.png");
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
} .column-extension {
      background-color: transparent;
      color: var(--ion-color-light-contrast);
    padding: 0px;
      border-radius: 25px;
      margin: 5px;
      margin-top: 5px;
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
  }
  </style>