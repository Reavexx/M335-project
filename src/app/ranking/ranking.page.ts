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
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
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
export class RankingPage {
  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['./home']);
  }
}
