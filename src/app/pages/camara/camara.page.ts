import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  public photos: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async takePicture() {
    try {
      const capturedPhoto = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      const imageUrl = capturedPhoto.webPath;
      if (imageUrl) {
        const safeImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
        this.photos.push(safeImageUrl);
      }
    } catch (error) {
      console.error('Error al tomar la foto', error);
    }
  }

  deletePhoto(index: number) {
    if (index >= 0 && index < this.photos.length) {
      this.photos.splice(index, 1);
    }
  }

  openPhoto(photo: SafeResourceUrl) {


  }

}
