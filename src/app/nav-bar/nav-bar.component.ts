import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa el módulo necesario
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-bar',
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  faLaptop = faLaptop;
  mensaje: string = '¡Hola desde mi componente!';
}
