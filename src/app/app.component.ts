import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {

  componentes: Observable<Componente[]> = new Observable();

  constructor(private menuCtrl: MenuController,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.componentes = this.dataService.getMenuOpts();
  }

  // initalizeApp() {
  //   this.menuCtrl.enable(true);
  // }

}
