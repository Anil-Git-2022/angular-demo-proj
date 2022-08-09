import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { PostformComponent } from './postform/postform.component';
import { PostformeditComponent } from './postformedit/postformedit.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowResponseComponent } from './show-response/show-response.component';


const routes : Routes = [

  {
    path : "post-list",
    component : PostlistComponent
  },
  {
    path : "",
    redirectTo : "/post-list",
    pathMatch : "full"
  },
  {
    path : "post-form",
    component : PostformComponent
  },
  {
    path : "post-edit/:index",
    component : PostformeditComponent
  },
  {
    path : "show-get-response",
    component : ShowResponseComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostlistComponent,
    PostComponent,
    PostformComponent,
    PostformeditComponent,
    ShowResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
