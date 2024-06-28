import { TestBed } from '@angular/core/testing';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { ServicioDBService } from './servicio-db.service';


class SQLiteObjectMock {
  executeSql(query: string, params?: any[]): Promise<any> {
    
    return Promise.resolve();
  }
}


class SQLiteMock {
  create(options?: any): Promise<SQLiteObject> {
    return Promise.resolve(new SQLiteObjectMock() as SQLiteObject);
  }
}


class ToastControllerMock {
  async create(options: any): Promise<any> {
    return {
      present: () => Promise.resolve(),
    };
  }
}

describe('ServicioDBService', () => {
  let servicioDBService: ServicioDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServicioDBService,
        { provide: SQLite, useClass: SQLiteMock },
        { provide: ToastController, useClass: ToastControllerMock },
      ],
    });

    servicioDBService = TestBed.inject(ServicioDBService);
  });

  it('should be created', () => {
    expect(servicioDBService).toBeTruthy();
  });

  
});
