import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
				<h1>Hello {{name}}</h1>
				<h2> {{miNombre}} </h2>
  `,
  styles:[
  `
	h2{
		color: red;
	}
  `
  ]
  
  
})
export class AppComponent  { 
name = 'Angular';
miNombre="alejandro";

 }
