import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import axios from 'axios'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Angular-Project';
  sample = false
  textdata: string = "";
  data: any[] = []



  constructor(){
    this.Declare()
  }
  

  onClick(){
    this.sample = true 
    console.log(this.textdata)
    setTimeout(()=> {
      this.textdata = ''
    }, 2000)
  }



  async Declare(){
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.data = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  


}

