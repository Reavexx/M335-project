import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Device } from '@capacitor/device';
import { Haptics } from '@capacitor/haptics';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.page.html',
  styleUrls: ['./task4.page.scss'],
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
    IonTitle,
  ],
})
export class Task4Page implements OnDestroy {
  isCharging: boolean = false;
  batteryInfoInterval: any;

  constructor(private router: Router) {
    this.checkChargingStatus();

    this.batteryInfoInterval = setInterval(() => {
      this.checkChargingStatus();
    }, 5000); // 5 Sekunden
  }

  ngOnDestroy() {
    clearInterval(this.batteryInfoInterval);
  }

  async checkChargingStatus() {
    try {
      const batteryInfo = await Device.getBatteryInfo();
      console.log('Battery Info:', batteryInfo);

      console.log('isCharging Value:', batteryInfo.isCharging);

      this.isCharging = !!batteryInfo.isCharging;

      if (this.isCharging) {
        this.vibrate();
      }
    } catch (error) {
      console.error('Error getting battery info:', error);
    }
  }

  async vibrate() {
    try {
      await Haptics.vibrate();
      console.log('Vibration erfolgreich durchgeführt.');
    } catch (error) {
      console.error('Error during vibration:', error);
    }
  }

  navigateToFinish() {
    this.router.navigate(['/finish']);
    clearInterval(this.timer);
  }

  goToHome() {
    this.router.navigate(['./home']);
    clearInterval(this.timer);
  }
  timer: any;
}
