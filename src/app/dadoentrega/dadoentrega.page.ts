import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-dadoentrega',
  templateUrl: './dadoentrega.page.html',
  styleUrls: ['./dadoentrega.page.scss'],
})
export class DadoentregaPage implements OnInit {

  cep : any = "";
  logradouro : any = "";
  complemento : any = "";  
  cidade : any = "";
  bairro : any = "";
  estado : any = "";

  pedido : any = {};
  
  entrega : any = {
     cep : "",
     logradouro : "",
     complemento : "",
     cidade : "",
     bairro : "",
     estado : ""  
  }

  constructor(private route: Router,                             
              private cartService: CartService) { }

  ngOnInit() {
    this.pedido = this.cartService.readShopCart();
  }

  saveDadoEntrega(){
     this.entrega.cep = this.cep;
     this.entrega.logradouro = this.logradouro;
     this.entrega.complemento = this.complemento;
     this.entrega.cidade = this.cidade;
     this.entrega.bairro = this.bairro;
     this.entrega.estado = this.estado;
     this.pedido.entrega = this.entrega;
  }

}
