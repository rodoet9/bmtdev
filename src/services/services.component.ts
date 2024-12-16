import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-services',
	imports: [MatExpansionModule],
	templateUrl: './services.component.html',
	styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
	constructor(private meta: Meta, private title: Title) {}

	ngOnInit() {
		this.title.setTitle('Servicii web');
		this.meta.updateTag({
			name: 'description',
			content:
				'Alege dintr-o gamă variată de servicii web pentru afaceri mici, inclusiv design personalizat, SEO și optimizare pentru rezultate mai bune în căutările Google.',
		});
	}
}
