import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: 'produtocategoria',
    loadChildren: () => import('./produtocategoria/produtocategoria.module').then( m => m.ProdutocategoriaPageModule)
  },
  {
    path: 'detalheproduto',
    loadChildren: () => import('./detalheproduto/detalheproduto.module').then( m => m.DetalheprodutoPageModule)
  },
  {
    path: 'dadopessoal',
    loadChildren: () => import('./dadopessoal/dadopessoal.module').then( m => m.DadopessoalPageModule)
  },
  {
    path: 'dadoentrega',
    loadChildren: () => import('./dadoentrega/dadoentrega.module').then( m => m.DadoentregaPageModule)
  },
  {
    path: 'dadobancario',
    loadChildren: () => import('./dadobancario/dadobancario.module').then( m => m.DadobancarioPageModule)
  },
  {
    path: 'loginsenha',
    loadChildren: () => import('./loginsenha/loginsenha.module').then( m => m.LoginsenhaPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'cartao',
    loadChildren: () => import('./cartao/cartao.module').then( m => m.CartaoPageModule)
  },
  {
    path: 'conclusao',
    loadChildren: () => import('./conclusao/conclusao.module').then( m => m.ConclusaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
