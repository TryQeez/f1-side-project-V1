import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {KdoComponent} from "./kdo/kdo.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'kdo', component: KdoComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
