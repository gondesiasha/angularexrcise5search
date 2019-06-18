import { Component,OnInit } from '@angular/core';
import {  HttpClient ,HttpErrorResponse,HttpRequest,HttpHeaderResponse } from '@angular/common/http';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Exercise5';
  array:any;
  in:any;
  
  constructor(private http:HttpClient)
  {  }
  getarr()
  {
    this.http.get('https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json')
    .subscribe((res)=>{
      this.array=res;

    }, error=>{
      console.log(error);

    }); 

  }
  search()
  {
    if(this.in=="")
    this.getarr()
    else
    {
      this.array=this.array.filter(ele=>{
        return (ele.title.toLowerCase().includes(this.in.toLowerCase()))
      })
    }
  }
  ngOnInit(){
    this.getarr()

  }
}
