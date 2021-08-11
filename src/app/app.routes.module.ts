import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./admin.guard";
import { ContactComponent } from "./contact/contact.component";
import { DemoComponent } from "./demo/demo.component";
import { DetailComponent } from "./detail/detail.component";
import { HomeComponent } from "./home/components/home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { PageNoFoundComponent } from "./page-no-found/page-no-found.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [ 
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                // component: HomeComponent
                loadChildren: () => import('./home/home.module').then(m  => m.HomeModule)
            },
            { 
                path: 'contact',
                loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
            },
            { 
                path: 'product',
                component: ProductsComponent
            },
            {
                path: 'products/:id',
                component: DetailComponent
            },
            {
                path: 'demo',
                loadChildren: () => import('./demo/demo.module').then(m  => m.DemoModule)
                // component: DemoComponent
            },
            { 
                path: 'order',
                loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
            }
        ]
    },
    { 
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        component: PageNoFoundComponent
    }
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})

export class AppRouterModule {}