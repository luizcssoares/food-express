import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Storage} from "@ionic/storage-angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface cliente { 
    id : number,
    cpf : string,
    nome : string,
    email : string,
    fone : string
}

export interface item {
    id : number,
    idprod : number,
    descricao : string,
    valor : number,
    qtde : number,
    total : number
}

@Component({
  selector: 'app-detalheproduto',
  templateUrl: './detalheproduto.page.html',
  styleUrls: ['./detalheproduto.page.scss'],
})
export class DetalheprodutoPage implements OnInit {

  form: FormGroup | undefined;
  
  produto : any = {
    id : 0,
    descricao : "",
    preco : 0
  };

  pedido : any = {
    id : 0,
    cliente : {
      id : 0,
      cpf : '000000000',
      nome : '',
      email : '',
      fone : ''
    },
    date : '',
    valor : 0,
    frete : 0,
    total : 0, 
    itens : [{
      id : 0,
      idprod : 0,
      descricao : '',
      valor : 0,
      qtde : 0,
      total : 0
    }],
    entrega : {
      id : 0,
      cep : '',
      logradouro :'',
      numero : 0,
      complemento : '',  
      bairro : '',
      cidade : '',
      estado : ''
    },
    pagamento : {
      id : 0,
      descricao : ''
    },
    cartao : [
    ]
  };

  pedido2 : any = {
    id : 0,
    cliente : {
      id : 0,
      cpf : '000000000',
      nome : '',
      email : '',
      fone : ''
    },
    date : '',
    valor : 0,
    frete : 0,
    total : 0, 
    itens : [{
      id : 0,
      idprod : 0,
      descricao : '',
      valor : 0,
      qtde : 0,
      total : 0
    }],
    entrega : {
      id : 0,
      cep : '',
      logradouro :'',
      numero : 0,
      complemento : '',  
      bairro : '',
      cidade : '',
      estado : ''
    },
    pagamento : {
      id : 0,
      descricao : ''
    },
    cartao : [
    ]
  };

  itens : item[] = [];

  item : any = {
    id : 0,
    idprod : 0,
    descricao : '',
    valor : 0,
    qtde : 0,
    total : 0
  }

  cliente : any = {
      id : 1,
      cpf : '73844403353',
      nome : 'LUIZ CARLOS',
      email : 'luizcssoares@gmail.com',
      fone : '85999549931'
  }

  entrega : any = {
      id : 1,
      cep : '60740005',
      logradouro :'AV.DR SILAS MUNGUBA',
      numero : 835,
      complemento : '103 BL B',  
      bairro : 'PARANGABA',
      cidade : 'FORTALEZA',
      estado : 'CE'
  }

  id : any;
     
  constructor(private route: ActivatedRoute, 
              private rota: Router,              
              private formBuilder: FormBuilder,
              private cartservice: CartService) { }
  
  ngOnInit() {        
      this.getProduto();      
  }   

  adicionarProduto() {      
      this.item = {
          id: 1,
          idprod : Number(this.produto.id),
          descricao : this.produto.descricao,
          valor : Number(this.produto.preco),
          qtde : 1,
          total : Number(this.produto.preco)
      }       
      this.cartservice.addItem(this.item);
      this.rota.navigate(['/carrinho']);
  }

  getProduto() {{
      this.id = this.route.snapshot.paramMap.get('id');
      this.cartservice.detalheProduto(this.id).subscribe ( (res : any) => {
          this.produto = JSON.parse(JSON.stringify(res));         
      })
  }}  
}
