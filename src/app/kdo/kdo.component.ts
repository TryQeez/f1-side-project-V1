import {Component, OnInit} from '@angular/core';
import {VoiceRecognitionService} from "../service/voice-recognition.service";
import {Routes} from "@angular/router";

@Component({
  selector: 'app-kdo',
  standalone: true,
  imports: [],
  templateUrl: './kdo.component.html',
  styleUrl: './kdo.component.css'
})
export class KdoComponent implements OnInit {


  constructor(private voiceRecognitionService: VoiceRecognitionService) {
  }

  ngOnInit(): void {

  }

}
