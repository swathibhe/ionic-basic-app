import { Component, OnInit } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 loginForm : FormGroup;
  constructor(private fb: FormBuilder,private spinnerDialog: SpinnerDialog,  private router: Router,public loadingController: LoadingController) {
    this.loginForm = this.fb.group({
      username:new FormControl ('', [Validators.required]),
      password:new FormControl ('', [Validators.required]),
    });
   }

  ngOnInit() {
  }
  async loginSubmit(){
    // this.spinnerDialog.show();
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 4000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    // console.log(this.loginForm.value)
    if (this.loginForm.value!=null) {
      
      let TIME_IN_MS = 4000;
      setTimeout( () => {
        // this.spinnerDialog.hide();
        this.router.navigate(['/home/tabs/tab1']);
      }, TIME_IN_MS);
     
    }
    return await loading.present();
  
  }

}
