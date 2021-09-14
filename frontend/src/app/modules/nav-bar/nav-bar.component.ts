import {Component, OnInit} from '@angular/core';
import {CategorieDto, CoursDto, UlearnService} from '../../../remote';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    isConnected: boolean = false;

    categories: CategorieDto[];
    cours: CoursDto[];

    constructor(private uLEARNservice: UlearnService,
                public authService: AuthService,
                private router: Router) {

    }

    ngOnInit() {
        this.authService.isConnected.subscribe((next) => this.isConnected = next);

        //*** On récupère les catégories directement en base ***
        this.uLEARNservice.getAllCategorieUsingGET().subscribe(value => {
            this.categories = value;
        });


    }

    logout() {
        this.authService.logout()
            .then(() => this.router.navigateByUrl('/'))
            .catch((err) => console.error('Une erreur est survenue.', err));
    }
}
