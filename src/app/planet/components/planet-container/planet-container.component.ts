import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlanetApiService} from '../../services/planet-api.service';

@Component({
    selector: 'app-planet-container',
    templateUrl: './planet-container.component.html',
    styleUrls: ['./planet-container.component.scss'],
})
export class PlanetContainerComponent implements OnInit {

    items: any[] = [];

    constructor(private router: Router, private planetApiService: PlanetApiService) {
        this.planetApiService.planetList.subscribe(data => {
            this.items = data;
        });
        this.planetApiService.getPlanetList();
    }

    ngOnInit() {
    }

    public callDetails(item: any) {
        if (item) {
            const selectedItem = item;
            this.planetApiService.setSelectedItem(item);
            this.router.navigate(['detail']);
        }

    }
}




