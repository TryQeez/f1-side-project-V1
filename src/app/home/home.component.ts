import {Component, OnInit} from '@angular/core';
import {FilemoonService} from "../service/filemoon.service";
import {FilemoonFolder} from "../../model/FilemoonFolder";
import {FilemoonFile} from "../../model/FilemoonFile";
import {NgFor} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SafePipe} from "safe-pipe";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    SafePipe,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public folders: FilemoonFolder[] = [];
  public currentFolder: FormControl<FilemoonFolder | null> = new FormControl<FilemoonFolder>({});
  public files: FilemoonFile[] = [];
  public currentFile: FormControl<FilemoonFile | null> = new FormControl<FilemoonFile>({});


  constructor(private filemoonService: FilemoonService, private sani: DomSanitizer) {
  }

  ngOnInit(): void {
    this.filemoonService.getFolder().subscribe(response => {
      this.folders = response.result.folders
        .sort((f1, f2) => (f1?.name ? f1.name : "") < (f2?.name ? f2.name : "") ? -1 : 1)
      this.currentFolder = new FormControl<FilemoonFolder>(this.folders[0])
      this.getFilesFromFilemoonForFolder(this.currentFolder.getRawValue()?.fld_id);
      this.currentFolder.valueChanges.subscribe(value => {
        this.getFilesFromFilemoonForFolder(this.currentFolder.getRawValue()?.fld_id);
      })
    })
  }

  public getFilesFromFilemoonForFolder(folderId: string | null | undefined) {
    if (folderId !== null && folderId !== undefined) {
      this.filemoonService.getFilesForFolder(folderId).subscribe(response => {
        if (response.result?.files) {
          this.files = response.result.files.sort((f1, f2) =>
            (f1?.title ? f1.title : "") < (f2?.title ? f2.title : "") ? -1 : 1);
        }
        this.currentFile = new FormControl<FilemoonFile>(this.files[0]);
      });
    }
  }

  getRessourceUrl() {
    let cf = this.currentFile.getRawValue()
    return this.sani.bypassSecurityTrustResourceUrl(cf?.link ?
      'https://filemoon.sx/e/' + cf.file_code + '/' + cf.title : 'test')
  }
}
