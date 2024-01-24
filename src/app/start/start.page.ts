import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Camera, PermissionStatus } from '@capacitor/camera';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class StartPage {
  constructor() {
    // Fügen Sie hier den Code für die Berechtigungsüberprüfung ein
    this.checkCameraPermission();
  }

  async checkCameraPermission() {
    const status = await Camera.requestPermissions();

    if (status.photos === 'granted') {
      // Berechtigung erteilt
      console.log('Kamera-Berechtigung erteilt');
    } else {
      // Berechtigung nicht erteilt
      console.log('Kamera-Berechtigung nicht erteilt');
    }
  }
}
