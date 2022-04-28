import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'navigation',
    loadChildren: () =>
      import('/home/flexmobile/visualcode-workspace/routingApp/src/app/navigation/navigation.module').then(
        (m) => m.NavigationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
