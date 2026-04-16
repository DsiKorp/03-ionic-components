import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: false
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any, position: 'bottom' | 'top' = 'bottom') {

    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false, // para obligar a que el usuario pulse una opción del popover para cerrarlo, no se cierra al pulsar fuera del popover
      side: position, // 'top' muestra el popover hacia arriba, 'bottom' hacia abajo
      alignment: 'center', // centra horizontalmente el popover respecto al elemento
      cssClass: position === 'top' ? 'popover-footer' : '' // clase CSS para estilos personalizados en el footer
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);

  }

}
