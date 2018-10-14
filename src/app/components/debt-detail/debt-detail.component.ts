import { Component, OnInit, Input } from '@angular/core';
import {DebtId} from '../../models/debtId';
import {Debt} from '../../models/debt';
import {DebtService} from '../../services/debt.service';

@Component({
  selector: 'app-debt-detail',
  templateUrl: './debt-detail.component.html',
  styles: []
})
export class DebtDetailComponent implements OnInit {
  @Input() debt: DebtId;

  constructor(private debtService: DebtService) { }

  ngOnInit() {
  }
  onUpdateDebt(): void {
    this.debtService.updateDebt(this.debt);
  }

}
