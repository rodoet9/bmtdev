import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StrapiService {
	private apiUrl = 'https://automatic-vitality-63db4a3832.strapiapp.com/api'; // Replace with your Strapi URL

	constructor(private http: HttpClient) {}

	getProjects(): Observable<any> {
		return this.http.get(`${this.apiUrl}/categories`);
	}

	getAbout(): Observable<any> {
		return this.http.get(`${this.apiUrl}/about`);
	}
}
