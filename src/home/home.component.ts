import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-home',
	imports: [RouterLink, MatGridListModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
	constructor(private meta: Meta, private title: Title) {}

	ngOnInit() {
		this.title.setTitle('Acasă');
		this.meta.updateTag({
			name: 'description',
			content:
				'Alege dintr-o gamă variată de servicii web pentru afaceri mici, inclusiv design personalizat, SEO și optimizare pentru rezultate mai bune în căutările Google.',
		});
	}
}
