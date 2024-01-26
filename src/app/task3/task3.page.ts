import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.page.html',
  styleUrls: ['./task3.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonButton],
})
export class Task3Page {
  constructor(private router: Router) {}

  navigateToTask4() {
    this.router.navigate(['/task4']);
  }

  isCameraOpen: boolean = false;
  qrCorrect: boolean = false;

  async openCamera() {
    // Use Capacitor's BarcodeScanner plugin to scan QR codes
    const result = await BarcodeScanner.startScan();

    // Handle the barcode scan result
    console.log('Barcode scan result:', result);

    // Check if the scanned QR code matches the expected string
    this.qrCorrect = result.hasContent && result.content === 'M335@ICT-BZ';

    // You can do something with the result here, e.g., update your UI or process the scanned data
    this.isCameraOpen = true;
  }
}
