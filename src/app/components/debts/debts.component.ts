import { Component, OnInit } from '@angular/core';
import {DebtService} from '../../services/debt.service';
import {DebtId} from '../../models/debtId';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styles: []
})
export class DebtsComponent implements OnInit {
  debts: DebtId[];
  selectedDebt: DebtId;

  constructor(private debtService: DebtService) {
  }

  ngOnInit() {
    this.getDebts();
  }
  getDebts(): void {
    this.debtService.getDebts().subscribe(debts => this.debts = debts);
  }
  onSelect(debt: DebtId): void {
    this.selectedDebt = debt;
  }
  onDelete(debt: DebtId): void {
    this.debtService.deleteDebt(debt);
    this.selectedDebt = null;
  }

}
