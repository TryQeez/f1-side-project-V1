import {Component, OnInit} from '@angular/core';
import {VoiceRecognitionService} from "../service/voice-recognition.service";

@Component({
  selector: 'app-kdo',
  standalone: true,
  imports: [],
  templateUrl: './kdo.component.html',
  styleUrl: './kdo.component.css'
})
export class KdoComponent implements OnInit{

  public commandText:String="";

  constructor(private voiceRecognitionService:VoiceRecognitionService) {
  }

  ngOnInit(): void {
    this.voiceRecognitionService.commandRecognized.subscribe(command => {
      console.log(command)
      this.handleCommand(command);
    });
  }

  startListening() {
    this.voiceRecognitionService.startListening();
  }

  handleCommand(command: string) {
    if (command.toLowerCase().includes('poudlard')) {
      this.commandText = command
    } else if (command.toLowerCase().includes('sorcier')) {
      this.commandText = command
    }
  }
}
