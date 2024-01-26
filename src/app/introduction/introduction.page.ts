import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonContent,
    IonCheckbox,
    NgOptimizedImage,
  ],
})
export class IntroductionPage {
  constructor() {}
}
