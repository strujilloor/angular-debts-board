import { Component, OnInit } from '@angular/core';
import {DebtService} from '../../services/debt.service';
import {DebtId} from '../../models/debtId';
import {NgForm} from '@angular/forms';
import {Debt} from '../../models/debt';

@Component({
  selector: 'app-add-debt',
  templateUrl: './add-debt.component.html',
  styles: []
})
export class AddDebtComponent implements OnInit {
  debt: Debt = {
    name: '',
    amount: 0,
    type: '',
    details: ''
  };
  types = ['Lent', 'Borrowed'];

  constructor(private debtService: DebtService) { }

  ngOnInit() {
  }

  onAddDebt(myForm: NgForm) {
    this.debtService.addDebt(this.debt);
  }

}
