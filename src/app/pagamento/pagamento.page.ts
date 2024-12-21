import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  cliente : any = {};
  entrega : any = {};
  pedido : any = {};
  cartao : any = {};
  tpPagamento : any = 0;

  constructor(private router : Router, private cartService : CartService) { }

  ngOnInit() {
    // insere Dados Pessoaais do Cliente            
    this.cliente = this.cartService.listaCliente();      
    if (this.cliente == null){        
        this.router.navigate(['/dadopessoal']);
    }
    
    // insere Endereco  de Entrega do Cliente            
    this.entrega = this.cartService.listEntrega();    
    if (this.entrega == null){        
        this.router.navigate(['/dadoentrega']);
    }    
    
    // Se tudo tiver cadastrado entao faço Login
    if (this.cartService.clienteLogado() == null){        
        this.router.navigate(['/loginsenha']);
    }
  }

  fecharPedido() {
    if (this.tpPagamento == "1") {
        this.cartao = this.cartService.listCartao();
        if (this.cartao == null){
           this.router.navigate(['/cartao']);
        } else {
            this.router.navigate(['/conclusao']);
        }
    }
  }
}
