import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
  

  constructor(
    public navCtrl: NavController,
    public navparams: NavParams,
    public alervctrl: AlertController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  
  showAlert() {
    let alert = this.alervctrl.create({
      title: 'Mensagem',
      subTitle: 'Cadastrado com sucesso',
      buttons: ['OK']
    });
    alert.present();
    
  }

}