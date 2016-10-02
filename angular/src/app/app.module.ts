import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

/* Feature Modules */
import { SharedModule }     from './shared/shared.module';
import { HomeModule }      from './home/home.module';
// import { CoreModule }     from './core/core.module';
import { PageNotFoundModule }     from './404/404.module';
import { appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    SharedModule,
    HomeModule,
    //CoreModule.forRoot(),
    PageNotFoundModule,

    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
