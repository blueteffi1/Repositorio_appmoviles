import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { ServicioDBService } from 'src/app/service/servicio-db.service';



class ServicioDBServiceMock {
  async initDatabase() {
    return Promise.resolve(); 
  }

  async validarUsuario(usuario: string, password: string) {
    return Promise.resolve({}); 
  }
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let servicioDBService: ServicioDBService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: ServicioDBService, useClass: ServicioDBServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    servicioDBService = TestBed.inject(ServicioDBService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
