import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  { 
    path: '', component: NavigationComponent,
    children: [
      {
        path: "dashboard", component: DashboardComponent
      },
      {
        path: "dragdrop", component: DragdropComponent
      },
      {
        path: "address", component: AddressComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationRoutingModule {}
