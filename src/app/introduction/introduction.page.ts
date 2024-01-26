import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
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
import { Router } from '@angular/router';

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
  constructor(
    private router: Router,
    private alertController: AlertController,
  ) {}

  async Continue() {
    const alert = await this.alertController.create({
      header: 'Enter Your Name',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Your Name',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Continue',
          handler: (data) => {
            // Check if a name is entered
            if (data.name) {
              // Navigate to the next page with the entered name
              this.router.navigate(['./task1', { name: data.name }]);
            } else {
              // Show an alert if the name is not entered
              this.showNameNotEnteredAlert();
            }
            this.timer = setInterval(() => {
              this.elapsedTime++;
              console.log('Timer:', this.elapsedTime);
            }, 1000); // Update every 1 second
          },
        },
      ],
    });

    await alert.present();
  }

  private async showNameNotEnteredAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please enter your name to continue.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  goToHome() {
    this.router.navigate(['./home']);
  }

  timer: any;
  elapsedTime: number = 0; // in seconds
}
