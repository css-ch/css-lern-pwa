import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent: any;

  constructor() { }

  public initPwaPrompt() {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
      });
  }

  public addToHomeScreen() {
    if (!this.promptEvent) {
      console.log('deferredPrompt null');
      return;
    }

    this.promptEvent.prompt();
  }
}
