import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QRCodeModule,
    NgxQRCodeModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  providers: [
    BarcodeScanner,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
