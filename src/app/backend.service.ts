import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { post } from "./post.model";
import { PostService } from "./post.service";
import { catchError, retry, tap } from 'rxjs/operators';
import { throwError } from "rxjs";

@Injectable({providedIn : 'root'})

export class BackendService{
    post ?:Object;

    constructor(private PostService : PostService,private http: HttpClient){
       
    }
    SaveData(){
        //const listofPosts : post[] = this.PostService.getPosts();

        return this.http.get("https://jsonplaceholder.typicode.com/posts")
        	// .pipe(
            // retry(1),
            // catchError(this.handleError)
            // )
        
    }
      // Error handling 
  handleError(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }




    // FetchData(){
    //     this.http.get<post[]>("https://jsonplaceholder.typicode.com/posts"
    //     ).pipe(// check with structure of data
    //         tap((listOfPosts : post[]) => { //then place the data in particular structure

    //             console.log(listOfPosts)
    //         })
    //     ) //to check when the data is coming
    // }
}


