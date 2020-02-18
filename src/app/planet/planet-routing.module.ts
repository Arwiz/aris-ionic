import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FolderPage} from '../folder/folder.page';
import { PlanetContainerComponent} from './components/planet-container/planet-container.component';
import {PlanetDetailComponent} from './components/planet-detail/planet-detail.component';


const routes: Routes = [
  {
    path: '',
    component: PlanetContainerComponent
  },
  {
    path: 'detail',
    component: PlanetDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
