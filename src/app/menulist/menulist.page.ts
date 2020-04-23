import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular'
declare var $;
@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.page.html',
  styleUrls: ['./menulist.page.scss'],
})
export class MenulistPage implements OnInit {
  
  @ViewChild(IonContent) content: IonContent;
  menuList=[
    {
      main_cat_name:"Soups",
      main_id:'m123',
      sub_cat:[
        {
          sub_name:"Veg", 
          sub_id:"s123",
          sub_menu:[
            {item_name:'Veg Coriander Soup', id:"i123"},
            {item_name:'Veg Mint Pepper Soupp', id:"i124"},
            {item_name:'Veg Coriander Soup', id:"i125"},
            {item_name:'Veg Mint Pepper Soup Soup', id:"i126"},
            {item_name:'Veg Coriander Soup', id:"i127"},
            {item_name:'Veg Mint Pepper Soup Soup', id:"i128"},
          ]
        },
        {
          sub_name:"Non-Veg", 
          sub_id:"s124",
          sub_menu:[
            {item_name:'Chicken Coriander Soup', id:"i543"},
            {item_name:'Manchow Coriander Soup', id:"i544"},
            {item_name:'Chicken Coriander Soup', id:"i545"},
            {item_name:'Veg Coriander Soup', id:"i140"},
            {item_name:'Chicken Coriander Soup', id:"i547"},
            {item_name:'Veg Coriander Soup', id:"i158"},
          ]
        },
      ]
    },
    {
      main_cat_name:"Main Course",
      main_id:'m223',
      sub_cat:[
        {
          sub_name:"Veg Main Course", 
          sub_id:"s223",
          sub_menu:[
            {item_name:'Veg Coriander Soup', id:"i103"},
            {item_name:'Veg Mint Pepper Soupp', id:"i024"},
            {item_name:'Veg Coriander Soup', id:"i105"},
            {item_name:'Veg Mint Pepper Soup Soup', id:"i026"},
            {item_name:'Veg Coriander Soup', id:"i107"},
            {item_name:'Veg Mint Pepper Soup Soup', id:"i028"},
          ]
        },
        {
          sub_name:"Chicken Main Course", 
          sub_id:"s224",
          sub_menu:[
            {item_name:'Chicken Coriander Soup', id:"i193"},
            {item_name:'Manchow Coriander Soup', id:"i149"},
            {item_name:'Chicken Coriander Soup', id:"i195"},
            {item_name:'Veg Coriander Soup', id:"i196"},
            {item_name:'Chicken Coriander Soup', id:"i197"},
            {item_name:'Veg Coriander Soup', id:"i198"},
          ]
        },
        {
          sub_name:"Seafood Main Course", 
          sub_id:"s324",
          sub_menu:[
            {item_name:'Chicken Coriander Soup', id:"i183"},
            {item_name:'Manchow Coriander Soup', id:"i184"},
            {item_name:'Chicken Coriander Soup', id:"i185"},
            {item_name:'Veg Coriander Soup', id:"i186"},
            {item_name:'Chicken Coriander Soup', id:"i187"},
            {item_name:'Veg Coriander Soup', id:"i188"},
          ]
        }
      ]
    },
    {
      main_cat_name:" Course",
      main_id:'m523',
      sub_cat:[
        {
          sub_name:"Veg Main Course", 
          sub_id:"s523",
          sub_menu:[
            {item_name:'Veg Coriander Soup', id:"i703"},
            {item_name:'Veg Mint Pepper Soupp', id:"i724"},
            {item_name:'Veg Coriander Soup', id:"i705"},
            {item_name:'Veg Mint Pepper Soup Soup', id:"i726"},
            {item_name:'Veg Coriander Soup', id:"i177"},
            {item_name:'Veg Mint Pepper Soup Soup', id:"i728"},
          ]
        },
        {
          sub_name:"Chicken Main Course", 
          sub_id:"s524",
          sub_menu:[
            {item_name:'Chicken Coriander Soup', id:"i393"},
            {item_name:'Manchow Coriander Soup', id:"i349"},
            {item_name:'Chicken Coriander Soup', id:"i395"},
            {item_name:'Veg Coriander Soup', id:"i396"},
            {item_name:'Chicken Coriander Soup', id:"i397"},
            {item_name:'Veg Coriander Soup', id:"i398"},
          ]
        },
        {
          sub_name:"Seafood Main Course", 
          sub_id:"s394",
          sub_menu:[
            {item_name:'Chicken Coriander Soup', id:"i683"},
            {item_name:'Manchow Coriander Soup', id:"i684"},
            {item_name:'Chicken Coriander Soup', id:"i685"},
            {item_name:'Veg Coriander Soup', id:"i686"},
            {item_name:'Chicken Coriander Soup', id:"i687"},
            {item_name:'Veg Coriander Soup', id:"i688"},
          ]
        }
      ]
    }
  ]
  constructor(private route: ActivatedRoute) { 
  }
   ngOnInit() {
    
  }
  selectedIndex = 0;
  menuId =this.menuList[0].main_id;
  subId;
  scrollToTop(element) {
    this.menuId=element.main_id;
    this.subId=element.sub_cat[0].sub_id;
    let yOffset = document.getElementById(element.main_id).offsetTop;
    this.content.scrollToPoint(0, yOffset, 10);
  }
  scrollTo(element){
    this.subId=element;
    let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollToPoint(0, yOffset, 100);
  }
  logScrollStart(){
  
  }
  // showToolbar = false;
  logScrolling(event){
    console.log(event);
    console.log('scroll event scrollTop', event.detail.scrollTop);
    console.log('scroll event detail', event.detail);
    console.log(event.target );
    console.log('Element:', document.elementFromPoint(300, 100).id);
    let scrollId=document.elementFromPoint(300, 100).id;
    for (let i = 0; i < this.menuList.length; i++) {
      if (scrollId==this.menuList[i].main_id) {
        this.menuId=scrollId
      }
      for (let j = 0; j < this.menuList[i].sub_cat.length; j++) {
        if (scrollId==this.menuList[i].sub_cat[j].sub_id) {
          this.subId=scrollId
        }
      }
    }
    
    
    // if (event && event.detail && event.detail.scrollTop) {
    //   const scrollTop = event.detail.scrollTop;
    //   if (scrollTop >= 620) {
    //     this.menuId='m223'
    //   }
    //   if (scrollTop >= 1550) {
    //     this.menuId='m523'
    //   }
    //   if (scrollTop <= 600) {
    //     this.menuId='m123'
    //   }
    // }
  }
  logScrollEnd(){

  }
  

}
