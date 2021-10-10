import { Component, OnInit } from '@angular/core';
import { CargaArchivosService } from '../services/carga-archivos.service';

@Component({
  selector: 'app-carga-imagenes',
  templateUrl: './carga-imagenes.component.html',
  styleUrls: ['./carga-imagenes.component.css'],
})
export class CargaImagenesComponent implements OnInit {
  fileToUpload: File | null = null;
  images:string[] = ["circuito1.svg"];
  constructor(cargaArchivosService: CargaArchivosService) {}

  ngOnInit(): void {
    console.log("images",this.images)
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {

  }
}
