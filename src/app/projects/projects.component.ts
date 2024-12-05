import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../strapi.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	projects: any[] = [];

	constructor(private strapiService: StrapiService) {}

	ngOnInit(): void {
		this.strapiService.getProjects().subscribe(data => {
			this.projects = data.data;
			console.log(this.projects);
		});
	}
}
