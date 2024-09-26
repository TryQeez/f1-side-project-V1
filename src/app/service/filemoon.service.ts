import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilmemoonResponse} from "../../model/FilmemoonResponse";

@Injectable({
  providedIn: 'root'
})
export class FilemoonService {

  private key:string="65074gm5e0a532zybze4p"

  constructor(private http: HttpClient) {

  }

  public getFolder(): Observable<FilmemoonResponse> {
    return this.http.get<FilmemoonResponse>('https://filemoonapi.com/api/folder/list?key=${key}'.replace('${key}', this.key));
  }
  public getFilesForFolder(folderId: string): Observable<FilmemoonResponse> {
    return this.http.get<FilmemoonResponse>("https://filemoonapi.com/api/file/list?key=${key}&fld_id=${folder_id}".replace('${key}', this.key)
      .replace('${folder_id}', folderId));
  }
}
