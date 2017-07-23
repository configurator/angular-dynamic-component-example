import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	styles: [`
		div, button {
			margin: 1em;
			padding: 1em;
			border-radius: 5px;
			border: 1px solid black;
			background: rgba(0,0,0,0.2);
		}
	`],
	template: `
		<div><my-dynamic-component [type]="type"></my-dynamic-component></div>

		<div>Type: {{type}}</div>

		<div>
			<button (click)="type = ''">No type</button>
			<button (click)="type = 'one'">Type 1</button>
			<button (click)="type = 'two'">Type 2</button>
		</div>
	`
})
export class AppComponent {}
