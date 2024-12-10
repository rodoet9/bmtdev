import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../common-components/layout/layout.component';

@Component({
	selector: 'app-root',
	imports: [LayoutComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'bmtdev';
}
