import { Component, OnInit } from '@angular/core';
import { CargaArchivosService } from '../services/carga-archivos.service';

@Component({
  selector: 'app-carga-imagenes',
  templateUrl: './carga-imagenes.component.html',
  styleUrls: ['./carga-imagenes.component.css'],
})
export class CargaImagenesComponent implements OnInit {
  fileToUpload: File | null = null;

  constructor(cargaArchivosService: CargaArchivosService) {}

  ngOnInit(): void {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {

  }
}
