import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
	// { path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'contact-us', component: ContactComponent },
];
