import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlanetRoutingModule} from './planet-routing.module';
import {PlanetContainerComponent} from './components/planet-container/planet-container.component';
import {IonicModule} from '@ionic/angular';
import {PlanetDetailComponent} from './components/planet-detail/planet-detail.component';


@NgModule({
    declarations: [
        PlanetContainerComponent,
        PlanetDetailComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        PlanetRoutingModule
    ]
})
export class PlanetModule {
}
