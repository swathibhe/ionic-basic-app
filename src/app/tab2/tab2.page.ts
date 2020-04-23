import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonSlides) slides: IonSlides;
  images=[{url:'assets/images/f1.jpg'},{url:'assets/images/food.jpg'},{url:'assets/images/f2.jpg'}]
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
