import { Component, signal } from '@angular/core';
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
  selector: 'app-task1',
  templateUrl: './task1.page.html',
  styleUrls: ['./task1.page.scss'],
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
export class Task1Page {
  currentCoordinates: any = null;
  distance: number = 0;
  targetCoordinates = {
    latitude: 47.07194420332956,
    longitude: 8.348944967594608,
  };
  targetRadius: number = 100; // Radius in meters

  constructor(private router: Router) {}

  isWithinRadius: boolean = false;

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCoordinates = coordinates.coords;
    console.log('Current coordinates:', this.currentCoordinates);
    this.checkIfWithinRadius();
  }

  checkIfWithinRadius() {
    this.distance = this.calculateDistance(
      this.targetCoordinates.latitude,
      this.targetCoordinates.longitude,
      this.currentCoordinates.latitude,
      this.currentCoordinates.longitude,
    );

    this.isWithinRadius = this.distance <= this.targetRadius;

    if (this.isWithinRadius) {
      console.log('You are within 100 meters of the target coordinates.');
      this.vibrate();
    } else {
      console.log(
        'You are outside the 100-meter radius of the target coordinates.',
      );
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

  navigateToTask2() {
    this.router.navigate(['/task2']);
  }

  goToHome() {
    this.router.navigate(['./home']);
    clearInterval(this.timer);
  }
  timer: any;
}
