import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DebtsComponent} from './components/debts/debts.component';
import {AddDebtComponent} from './components/add-debt/add-debt.component';
import {DebtDetailComponent} from './components/debt-detail/debt-detail.component';

const routes: Routes = [
    {path: '', redirectTo: '/debts', pathMatch: 'full'},
    {path: 'debts', component: DebtsComponent},
    {path: 'add-debt', component: AddDebtComponent},
    {path: 'detail/:id', component: DebtDetailComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
