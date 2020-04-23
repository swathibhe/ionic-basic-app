import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule  ,FormArray } from '@angular/forms';
import { menulistService } from '../services/menulist.service'
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit  {
  private menuDetailsForm : FormGroup;
  private menuList=[]
  private formSubmitName;
  itemId;
  map: GoogleMap;
  loading: any;
  constructor(private fb: FormBuilder, private service:menulistService,private platform: Platform) {
    this.menuDetailsForm = this.fb.group({
      menuname:new FormControl ('', [Validators.required]),
      description:new FormControl ('', [Validators.required]),
      price:new FormControl ('', [Validators.required,Validators.minLength(1)]),
      gst:new FormControl ('', [Validators.required]),
      GSTN:new FormControl ('',  [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}Z[0-9]{1}')])
    });
   }
   async ngOnInit() {
    this.formSubmitName="Add";
     this.getMenuData();
     await this.platform.ready();
    await this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });
  }

  getMenuData(){
    this.service.getAllMenusDetails().subscribe(
      res=>{
        this.menuList=res;
      }
    )
  }
  newMenuItemAdd(){
    this.formSubmitName="Add";
    this.menuDetailsForm.reset();
  }
  menuData(menu){
    this.itemId=menu.id
    this.formSubmitName="Update";
    this.menuDetailsForm.reset(
      {
        menuname:menu.menuname,
        description:menu.description,
        price:menu.price,
        gst:menu.gst,
        GSTN:menu.GSTN
      }
    );
  }
  menuDetailsSubmit(){
    let cgst_sgst=(this.menuDetailsForm.value.price*(this.menuDetailsForm.value.gst/100))/2
    const obj={
      menuname:this.menuDetailsForm.getRawValue()['menuname'],
      description:this.menuDetailsForm.getRawValue()['description'],
      price:this.menuDetailsForm.getRawValue()['price'],
      gst:this.menuDetailsForm.getRawValue()['gst'],
      GSTN:this.menuDetailsForm.getRawValue()['GSTN'],
      cgst:cgst_sgst,
      sgst:cgst_sgst
    }
    console.log(obj);
    
    if (this.formSubmitName=="Add") {
      this.service.PostMenuData(obj).subscribe(
        res=>{
          this.getMenuData();
          this.formSubmitName="Add";
          this.menuDetailsForm.reset();
        }
      )
    }
    if (this.formSubmitName=="Update") {
      this.service.updateMenuData(this.itemId,obj).subscribe(
        res=>{
          this.getMenuData();
          this.formSubmitName="Add";
          this.itemId="";
          this.menuDetailsForm.reset();
        }
      )
    }
  }
}
