import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-dadopessoal',
  templateUrl: './dadopessoal.page.html',
  styleUrls: ['./dadopessoal.page.scss'],
})
export class DadopessoalPage implements OnInit {
  cpf : any ;
  nome :any;
  email: any;
  telefone : any;
  senha:  any;
  redigite : any;  

  entrega : any = {};

  pedido : any = {};
  pessoal : any = {    
      id : 0,
      cpf : 0,
      nome : "",
      email : "",
      telefone : "",
      senha : "",
      foto : "assets/images/foto.png"
  }

  constructor( private route: Router,                             
               private cartService: CartService) {                 
             }

  ngOnInit() {
    this.pedido = this.cartService.readShopCart();
  }

  saveDadoPessoal(){
    this.pessoal.cpf = this.cpf;
    this.pessoal.nome = this.nome;
    this.pessoal.email = this.email;
    this.pessoal.telefone = this.telefone;
    this.pessoal.senha = this.senha;
    //this.pessoal.redigite = this.loginForm.cpf;
    this.cartService.saveDadoPessoal(this.pessoal);    
    this.pedido.pessoal = this.pessoal;
  }

}
