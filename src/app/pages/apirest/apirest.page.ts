import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { ApiclientService } from 'src/app/service/apiclient.service';



@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {

user:any;
users: any;
posts: any;
post: any = {
  id:null,
  title: "",
  body:"",
  userId:null
};

compareWith:any;
constructor(
  private api: ApiclientService) {}

ngOnInit() {
  this.getUsuarios();
  this.getPosts();
}

getUsuario(userId: any) {
  this.api.getUsuario(userId).subscribe(
    (data) => {
      console.log(data)
      this.user = data;
    },
  
  );
}

getUsuarios() {
  this.api.getUsuarios().subscribe(
    (data) => {
      this.users = data;
    },
  );
}

getPosts() {
  this.api.getPosts().subscribe(
    (data) => {
      this.posts = data;
      this.posts.reverse();
    },
  );
}

guardarPost() {
    if (!this.post.userId) {
      if (!this.user) {
        console.log("Seleccione un usuario");
        return;
      }
      this.post.userId = this.user.id;
    }
  
    this.api.getPosts().subscribe(
      (posts) => {
        
        const existingPost = posts.find((p: any) =>
          p.title === this.post.title && p.body === this.post.body && p.userId === this.post.userId
        );
  
        if (existingPost) {
          // Si ya existe, actualizar el post existente
          this.api.updatePost(existingPost.id, this.post).subscribe(
            () => {
              console.log("Actualizado Correctamente");
              this.getPosts();
            },
            error => {
              console.log("Error al actualizar: " + error);
            }
          );
        } else {
          // Si no existe, crear uno nuevo
          const postToCreate = { ...this.post };
          delete postToCreate.id;
  
          this.api.createPost(postToCreate).subscribe(
            () => {
              console.log("Creado Correctamente");
              this.getPosts();
            },
            error => {
              console.log("Error al crear: " + error);
            }
          );
        }
      },
      error => {
        console.log("Error al obtener posts: " + error);
      }
    );
  }
  
  
setPost(_post: any) {
  this.post = _post;
  this.getUsuario(_post.userId);
  this.compareWith = this.compareWithFn;
}

eliminarPost(_post: any) {
  console.log("eliminar");
  this.api.deletePost(_post.id).subscribe(
    () => {
      console.log("Eliminado correctamente");
      this.getPosts();
    },
    error => {
      console.log("Error"+error);
    }
  );
}

compareWithFn = (o1: any, o2: any) => {
  return o1 && o2 ? o1.id === o2.id : o1 == o2;
};

limpiarPost() {
    
    this.post = {
      id: null,
      title: "",
      body: "",
      userId: null
    };
    this.user = null; 
  }
}
