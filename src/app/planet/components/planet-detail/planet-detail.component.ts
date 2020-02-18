import {Component, OnInit} from '@angular/core';
import {PlanetApiService} from '../../services/planet-api.service';

@Component({
    selector: 'app-planet-detail',
    templateUrl: './planet-detail.component.html',
    styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent implements OnInit {

    public planet: any;

    constructor(private  planetApiService: PlanetApiService) {
    }

    ngOnInit() {
        this.planet = this.planetApiService.getSelectedItem();
    }


}
