import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonIcon, IonTabBar, IonTabButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonIcon,
    IonTabBar,
    IonTabButton,
  ],
})
export class HomePage {
  /*constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['./home']);
  }

  goToRanking() {
    this.router.navigate(['./ranking']);
  }*/
  constructor(private router: Router) {}
  goToRanking() {
    this.router.navigate(['./ranking']);
  }

  startGame() {
    this.router.navigate(['./task1']);
  }
}
