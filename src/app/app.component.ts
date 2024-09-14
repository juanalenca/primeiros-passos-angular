import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


//marca as configurações do componente
@Component({
  //nome do componente para chamá-lo, como tag, em outros arquivos html
  selector: 'app-root',
  //comportamento dos modulos do angular
  standalone: true,
  //imports que o modulo necessita
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeiros-passos-angular';
}
