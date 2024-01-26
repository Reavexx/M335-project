import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
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
    const result = await BarcodeScanner.startScan();

    console.log('Barcode scan result:', result);

    this.qrCorrect = result.hasContent && result.content === 'M335@ICT-BZ';

    if (this.qrCorrect) {
      this.vibrate();
    }

    this.isCameraOpen = true;
  }
  async vibrate() {
    try {
      await Haptics.vibrate();
      console.log('Vibration erfolgreich durchgeführt.');
    } catch (error) {
      console.error('Error during vibration:', error);
    }
  }

  goToHome() {
    this.router.navigate(['./home']);
    clearInterval(this.timer);
  }
  timer: any;
}
