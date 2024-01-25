import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.page.html',
  styleUrls: ['./task1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Task1Page {
  initialPosition: any = null;
  distance: number = 0;
  targetCoordinates = {
    latitude: 47.07194420332956,
    longitude: 8.348944967594608,
  };
  targetRadius: number = 1; // Radius in meters

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

      if (this.distance <= this.targetRadius) {
        console.log('Device is within 10 meters of the target coordinates.');
        // You can add further actions or navigate to the next page here.
      } else {
        console.log(
          'Device is not within 10 meters of the target coordinates.',
        );
      }
    }
  };

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
}
