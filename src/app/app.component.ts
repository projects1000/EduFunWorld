import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  showMenu = false;

  deferredPrompt: any = null;
  showInstallButton = false;
  updateAvailable = false;

  constructor(private swUpdate: SwUpdate) {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallButton = true;
    });

    if (swUpdate.isEnabled) {
      swUpdate.versionUpdates.subscribe((event: any) => {
        if (event.type === 'VERSION_READY') {
          this.updateAvailable = true;
        }
      });
    }
  }

  startGame() {
    this.showMenu = true;
  }

  installPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          this.showInstallButton = false;
        }
        this.deferredPrompt = null;
      });
    }
  }

  updateApp() {
    window.location.reload();
  }
}
