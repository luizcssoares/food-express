import { Injectable } from '@angular/core';
import { ItemPedido } from '../model/itempedido';
import { Pagamento } from '../model/pagamento';
import { Entrega } from '../model/entrega';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  pedido : any = {
   id : 1,
   cliente : {},
   date : '',
   valor : 0,
   frete : 0,
   total : 0, 
   itens : [],
   entrega : {},
   pagamento : {
     id : 0,
     descricao : ''
   }
  };

  pedidos : any[] = [];
 
  ped : any = {}

  itens : any[] = [];

  urlProduto   : string = "http://localhost:3000/produtos";
  urlCategoria : string = "http://localhost:3000/categorias";
  urlPessoal   : string = "http://localhost:3000/pessoal";
  urlEntrega   : string = "http://localhost:3000/entrega";
  urlCartao    : string = "http://localhost:3000/cartao";
  urlPedido    : string = "http://localhost:3000/pedido";

  constructor(private httpClient: HttpClient) {       
      
  }

  createShopCart() {
      return this.httpClient.post(this.urlPedido, this.pedido);
  }

  readShopCart() {
      return this.httpClient.get(this.urlPedido); 
  }

  clienteLogado(){
      this.ped = this.readShopCart();           
      return this.ped.cliente;
  }

  updateShopCart(ped : any){
      return this.httpClient.put(this.urlPedido, ped);        
  }

  listaCategoria () {
      return this.httpClient.get(this.urlCategoria);
  }

  listaCliente () {
      return this.httpClient.get(this.urlPessoal);
  }

  listEntrega () {
      return this.httpClient.get(this.urlEntrega);
  }

  listCartao () {
      return this.httpClient.get(this.urlCartao);
  }

  dscCategoria (id : any) {
      //alert(this.urlCategoria + "/" + id);
      return this.httpClient.get(this.urlCategoria + "/" + id);
  }

  listaProdutoCategoria (id : number) {
      alert(this.urlProduto+"?idcat="+id);
      return this.httpClient.get( this.urlProduto+"?idcat="+id);
  }

  listaProdutoPromocao () {
      return this.httpClient.get( this.urlProduto);
  }

  listaProduto () {
      return this.httpClient.get( this.urlProduto);
 }

  detalheProduto (id: number) {
      return this.httpClient.get( this.urlProduto + "/" + id);
  }

  listaItensPedido () {
      this.pedido = this.readShopCart();
      this.itens = this.pedido.itens;            
      return this.itens;
  }

  addItem (item : ItemPedido) : any {    
      this.pedido = this.readShopCart();      
      if  (this.pedido == null) {
          this.createShopCart();
          this.pedido = this.readShopCart();
      }      
      this.pedido.itens.push(item);
      this.updateShopCart(this.pedido);      
  }

  removeItem (item : ItemPedido) {
     this.pedido.itens.splice(1) ;
     this.updateShopCart(this.pedido);          
  }

  incrementaItem (item : ItemPedido) {
     this.pedido.itens.push(item);
  }

  decrementaItem (item : ItemPedido) {
     this.pedido.itens.splice(1) ;
  }

  alteraPagamento (pagamento : Pagamento) {
     this.pedido.pagamento = pagamento
  }

  alteraEntrega (entrega : Entrega) {    
     this.pedido.entrega = entrega;
  }

  efetuaLogin (cpf :any, senha : any){
     return this.httpClient.get(this.urlPessoal + "?cpf="+cpf+"&senha="+senha);
  }

  saveDadoPessoal(pessoal : any){     
     this.pedido = this.readShopCart();
     this.pedido.cliente = pessoal;
     return this.httpClient.post(this.urlPessoal, pessoal);
  }

  saveDadoEntrega(entrega : any){     
     this.pedido = this.readShopCart();
     this.pedido.entrega = entrega;
     return this.httpClient.post(this.urlPessoal, entrega);
}

}
