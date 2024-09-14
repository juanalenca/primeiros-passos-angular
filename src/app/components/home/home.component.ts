import { Component, signal } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  //signal notifica quem está consumindo o determinado valor
  //armazena o valor e transmite para todos que o quiserem
  name = signal("Juan");
  cont = 0;
  value = false;
  imgUrl = "https://www.cdnlogo.com/logos/a/35/angular.svg";
  data = null;

  lista = []

  constructor(private service: HelloWorldService) {
    this.service.getHelloWorld().subscribe({

      next: (data) => {
        this.data = data[0].source
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Finalizou");
      }

    })
  }

  teste(){
    this.cont += 1;
  }

}
