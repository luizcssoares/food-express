import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
    
  pedido : any = {}     
  itens : any[] = [];  
  item : any = {};   
  usuario : any = {};
  nomeUsuario : any = "";

  constructor(private router : Router, private navCtrl: NavController, private cartService : CartService ) {
    
  }

  ngOnInit() {
    this.pedido = this.cartService.readShopCart();
    if (this.pedido !== null) {
        this.itens = this.pedido.itens;    
        alert(JSON.stringify(this.itens));
        this.usuarioLogado();
    }
  }

  fecharPedido(){
    this.saveShopCart();
    this.router.navigate(['/pagamento']);    
  }

  increment(item : any){
    item.qtde = item.qtde + 1;
    item.total = Number(item.qtde) * Number(item.valor);
  }

  decrement(item : any){
    item.qtde = item.qtde - 1;
    item.total = Number(item.qtde) * Number(item.valor);
  }

  usuarioLogado(){
    this.usuario = this.pedido.cliente;
    if (this.usuario !== null){
        this.nomeUsuario = this.usuario.nome;
        //alert(this.nome);
    }
  }  

  saveShopCart(){
    this.cartService.updateShopCart(this.pedido);
  }

  paginaInicial() {
    this.router.navigate(['/home']);
  }
}
