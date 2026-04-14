import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false
})
export class AlertPage implements OnInit {


  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  onClick() {
    console.log('Button clicked');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'A Sub Header Is Optional',
      backdropDismiss: false,
      message: 'A message should be a short, complete sentence.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultiple() {
    const alert = await this.alertController.create({
      header: 'Alert Multiple Buttons',
      subHeader: 'A Sub Header Is Optional',
      backdropDismiss: false,
      message: 'A message should be a short, complete sentence.',
      //buttons: ['Cancel', 'Open Modal', 'Delete'],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Open Modal',
          handler: () => {
            console.log('Confirm Modal');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Delete');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2015-03-01',
          max: '2025-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
          min: '2015-03-01',
          max: '2025-01-12'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data: any) => {
            console.log(data)
          }
        }
      ]
    });

    await alert.present();
  }

}
