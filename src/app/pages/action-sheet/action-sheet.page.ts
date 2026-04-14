import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false
})
export class ActionSheetPage implements OnInit {


  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      backdropDismiss: false, // para que no se pueda cerrar tocando fuera del action sheet
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log('Delete clicked');
          },
          cssClass: 'rojo',
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ],
    });

    await actionSheet.present();
  }

}
