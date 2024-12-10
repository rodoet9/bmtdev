import { Component } from '@angular/core';
import { HeaderComponent } from '../common-components/header/header.component';
import { FooterComponent } from '../common-components/footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [HeaderComponent, FooterComponent, RouterOutlet, RouterModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'bmtdev';
}
