import {FilemoonFolder} from "./FilemoonFolder";
import {FilemoonFile} from "./FilemoonFile";

export interface FilmemoonResponse {
  status:number,
  msg:string,
  result:FilemoonResutFolder,
  server_time:string,
}

export interface FilemoonResutFolder{
  folders:FilemoonFolder[]
  files:FilemoonFile[]
}
