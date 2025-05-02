import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { interceptors } from './shared/interceptors';
import { BudgetAllocatedComponent } from './budget-allocated/budget-allocated.component';  // ❌ Not standalone

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // ✅ Only standalone components go in imports
  ],
  providers: [
    provideHttpClient(withInterceptors(interceptors)),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
