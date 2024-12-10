import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {
  private recognition: any;
  private isListening = false;
  public commandRecognized: Subject<string> = new Subject();

  constructor() {
    this.initSpeechRecognition();
  }

  private initSpeechRecognition() {
    this.recognition = new (window as any).webkitSpeechRecognition();
    this.recognition.lang = 'fr-FR';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript;
      this.commandRecognized.next(command);
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };
  }

  public startListening() {
    if (!this.isListening) {
      this.recognition.start();
      this.isListening = true;
    }
  }

  public stopListening() {
    if (this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }
}
