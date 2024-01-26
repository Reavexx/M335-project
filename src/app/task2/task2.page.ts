import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
import { Haptics } from '@capacitor/haptics';
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
  selector: 'app-task2',
  templateUrl: './task2.page.html',
  styleUrls: ['./task2.page.scss'],
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
export class Task2Page {
  initialPosition: any = null;
  distance: number = 0;

  constructor(private router: Router) {}
  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    if (!this.initialPosition) {
      this.initialPosition = coordinates;
      console.log('Initial position:', this.initialPosition);
    } else {
      this.distance = this.calculateDistance(
        this.initialPosition.coords.latitude,
        this.initialPosition.coords.longitude,
        coordinates.coords.latitude,
        coordinates.coords.longitude,
      );

      console.log('Distance moved:', this.distance);

      if (this.distance > 20) {
        this.vibrate();
      }
    }
  };

  async vibrate() {
    try {
      await Haptics.vibrate();
      console.log('Vibration erfolgreich durchgeführt.');
    } catch (error) {
      console.error('Error during vibration:', error);
    }
  }

  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    this.distance = R * c * 1000; // Convert distance to meters
    return this.distance;
  }

  deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  navigateToTask3() {
    this.router.navigate(['/task3']);
  }

  goToHome() {
    this.router.navigate(['./home']);
    clearInterval(this.timer);
  }
  timer: any;
}
