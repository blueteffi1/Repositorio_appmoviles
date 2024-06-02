import { Component, ElementRef } from '@angular/core'; //Importaciones que necesitamos para nuestro codigoo ~
import { AnimationController } from '@ionic/angular';

@Component({ //decorador no olvidaaaar !! esto le dice a Angular que esta clase es un componente ~
  selector: 'app-emociones-pagina',
  templateUrl: './emociones.page.html',
  styleUrls: ['./emociones.page.scss'],
})
export class EmocionesPage {
  
  galeria: { imagen: string, descripcion: string }[] = [ //propiedades, es como una cajita donde pueudes poner coosas wiiii n_n/
    { imagen: 'assets/img/anya-forger-2.avif', descripcion: 'Sorprendido por la vida ~' },
    { imagen: 'assets/img/hq720.jpg', descripcion: 'Sorprendido por el destino ~' },
    { imagen: 'assets/img/spy-x-family-anticipa-grandes-cambios-para-anya-forger.jpg', descripcion: 'Alegre n.n' },
    { imagen: 'assets/img/Anya1.jpeg', descripcion: 'Emocionadooo ~' },
    { imagen: 'assets/img/maxresdefault.jpg', descripcion: 'La vida es injusta ~' },
    { imagen: 'assets/img/portada_spy-x-family-188.jpg', descripcion: 'jejejejejejejej ~' }, 
  ];

  imagenAleatoria: string = ''; 
  descripcionAleatoria: string = ''; 

  constructor(private animationCtrl: AnimationController, private elementRef: ElementRef) { //Esto es como una fábrica que hace que nuestro compoonente funcione !! 
    this.playAnimation(); 
  }

  playAnimation() { // esto es una instrucción de como haremos la animación
    const indiceAleatorio = Math.floor(Math.random() * this.galeria.length);
    this.imagenAleatoria = this.galeria[indiceAleatorio].imagen;
    this.descripcionAleatoria = this.galeria[indiceAleatorio].descripcion;

    
    const imageContainer = this.elementRef.nativeElement.querySelector('.image-container');
    
   
    if (imageContainer) {
      
      const animation = this.animationCtrl
        .create() // para que no se me olvide >w< : creando una nueva animación
        .addElement(imageContainer) // para quue la animación afecte al coontenedor de la imagen ~
        .duration(1500) // duración de la animacion ojitooo
        .iterations(1) // cuantas veces queremos que se repita la animación o.O
        .fromTo('transform', 'scale(1)', 'scale(1.1)')  //Queremos que la animación cambie de propiedad, queremos?, sii queremos !     

      animation.play(); // finally ! con esto decimos que queremos reproducir la animación, oh si, queremos o_ó
    }
  }
}
