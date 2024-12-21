import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-loginsenha',
  templateUrl: './loginsenha.page.html',
  styleUrls: ['./loginsenha.page.scss'],
})
export class LoginsenhaPage implements OnInit {

  constructor(private router : Router, private cartService : CartService) { }

  cpf : any = "";
  senha : any = "";
  pessoa : any = {};

  ngOnInit() {    
  }

  efetuarLogin(){
     this.pessoa = this.cartService.efetuaLogin(this.cpf, this.senha);
     if (this.pessoa !== null){
         this.router.navigate(['/pagamento']);
     }
  }

  efetuarCadastro(){
     this.router.navigate(['/dadopessoal']);
  }

  paginaInicial(){
     this.router.navigate(['/home']);
  }

}
