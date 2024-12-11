import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
	selector: 'app-home',
	imports: [RouterLink, MatGridListModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
