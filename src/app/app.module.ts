import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DebtsComponent } from './components/debts/debts.component';
import { DebtDetailComponent } from './components/debt-detail/debt-detail.component';
import { AddDebtComponent } from './components/add-debt/add-debt.component';

@NgModule({
  declarations: [
    AppComponent,
    DebtsComponent,
    DebtDetailComponent,
    AddDebtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
