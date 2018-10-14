import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DebtsComponent } from './components/debts/debts.component';
import { DebtDetailComponent } from './components/debt-detail/debt-detail.component';
import { AddDebtComponent } from './components/add-debt/add-debt.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DebtsComponent,
    DebtDetailComponent,
    AddDebtComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
