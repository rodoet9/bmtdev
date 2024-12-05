import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StrapiService {
	private apiUrl = 'http://localhost:1337'; // Replace with your Strapi URL

	constructor(private http: HttpClient) {}

	getProjects(): Observable<any> {
		return this.http.get(`${this.apiUrl}/projects`);
	}

	getAbout(): Observable<any> {
		return this.http.get(`${this.apiUrl}/about`);
	}
}
