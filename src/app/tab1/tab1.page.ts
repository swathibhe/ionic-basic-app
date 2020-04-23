import { Component } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // public myAngularxQrCode: string = null;
  qrData = null;
  createdCode = null;
  scannedCode= null;
  // barcodeScannerOptions: BarcodeScannerOptions;
  constructor (private barcodeScanner: BarcodeScanner) {
    // assign a value
    // this.myAngularxQrCode = 'Your QR code data string';
    // this.encodeData = "https://www.FreakyJolly.com";
    //Options
    // this.barcodeScannerOptions = {
    //   showTorchButton: true,
    //   showFlipCameraButton: true
    // };
  }
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedCode = barcodeData.text;
        console.log(this.scannedCode);
        
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
 
  createCode() {
    this.createdCode=this.qrData;
    console.log(this.createdCode);
    
  }
}
