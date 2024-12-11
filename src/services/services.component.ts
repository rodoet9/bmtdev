import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
	selector: 'app-services',
	imports: [MatExpansionModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './services.component.html',
	styleUrl: './services.component.scss',
})
export class ServicesComponent {
	readonly panelOpenState = signal(false);
}
