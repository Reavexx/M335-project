import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  timer: any;
  seconds: number = 0;
  displayTime: string = '00:00';

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.seconds++;
      this.updateDisplayTime();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  updateDisplayTime() {
    const minutes = Math.floor(this.seconds / 60);
    const seconds = this.seconds % 60;

    this.displayTime = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }

  ngOnDestroy() {
    this.stopTimer();
  }
}
