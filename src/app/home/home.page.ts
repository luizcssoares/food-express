import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { NavController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  listCat : any[] = [];  
  categoria : any = {
    id : 0,
    image  : '',
    descricao : ''
  }

  constructor(private router : Router, private navCtrl: NavController, private cartService : CartService ) {
      this.getCategorias();
  }

  getCategorias(){
      this.cartService.listaCategoria().subscribe ( (resp : any) => {
         this.listCat = resp;
      })
  }

  editCategoria(categoria: any) {   
      //alert(JSON.stringify(categoria));
      this.categoria = JSON.parse(JSON.stringify(categoria));
      //alert(this.categoria.id);
      this.router.navigate(['/produtocategoria', { idcat: this.categoria.id }]);      
  }

  acessaCarrinho() {
    this.router.navigate(['/carrinho']); 
  }
}
