import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-show-response',
  templateUrl: './show-response.component.html',
  styleUrls: ['./show-response.component.css']
})
export class ShowResponseComponent implements OnInit {
  product:any = []
  constructor(private BackendService : BackendService
    ) { }

  ngOnInit(): void {
    this.BackendService.SaveData().subscribe((data :any ) =>{
      console.log(data)
             this.product = data
      
      console.log(this.product)
          })
  }
//   GetResponse(){
//     this.BackendService.SaveData().subscribe((data :any ) =>{
//       console.log(data)
//       this.product = data

//       //console.log(this.product)
//    })
//    //console.log(posts)
// }

}
