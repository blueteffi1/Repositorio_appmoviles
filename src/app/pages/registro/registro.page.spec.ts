import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertController, IonicModule } from '@ionic/angular';
import { ServicioDBService } from 'src/app/service/servicio-db.service';
import { BehaviorSubject } from 'rxjs';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  
  class ServicioDBServiceMock {
    private isDBReadySubject = new BehaviorSubject<boolean>(true); 

    getIsDBReady() {
      return this.isDBReadySubject.asObservable();
    }

    insertUsuario(nombre: string, apellido: string, usuario: string, password: string): Promise<void> {
      return Promise.resolve(); 
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        AlertController,
        { provide: ServicioDBService, useClass: ServicioDBServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
