import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtocategoria',
  templateUrl: './produtocategoria.page.html',
  styleUrls: ['./produtocategoria.page.scss'],
})
export class ProdutocategoriaPage implements OnInit {  

  listProdCat : any[] = [];
  categoria : any = {
    id : 0,
    image : '',
    descricao : ''
  };
  descricao : string = "";

  produto : any = {};

  constructor(private cartService : CartService, private route : Router, private router: ActivatedRoute) { }

  idcat : any;  

  ngOnInit() {
    this.idcat = this.router.snapshot.paramMap.get('idcat');
    //alert(this.idcat);
    this.getProdutoCategoria(this.idcat);  
    this.nomCategoria(this.idcat);    
  }

  getProdutoCategoria(idcat : any) {
    this.listProdCat = [];
    this.cartService.listaProduto().subscribe ( (result : any) => {      
       result.filter( (f : any) => f.idcat == idcat)
       this.listProdCat = result;
    })
  }

  nomCategoria (idcat : any) {
     this.cartService.dscCategoria(idcat).subscribe ( (result : any) => {
          this.categoria = JSON.parse(JSON.stringify(result));          
          this.descricao = this.categoria.descricao;
     })
  }

  editProduto(produto : any) {
      //alert(JSON.stringify(categoria));
      this.produto = JSON.parse(JSON.stringify(produto));
      //alert(this.categoria.id);
      this.route.navigate(['/detalheproduto', { id: this.produto.id }]);             
  }

}
