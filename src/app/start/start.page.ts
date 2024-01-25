import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
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
  ],
})
export class StartPage {
  constructor(private router: Router) {}
  navigateToTabsRoute() {
    this.router.navigate(['./home']);
  }
}
