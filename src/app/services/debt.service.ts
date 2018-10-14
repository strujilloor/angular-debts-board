import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Debt} from '../models/debt';
import {DebtId} from '../models/debtId';


@Injectable({
  providedIn: 'root'
})
export class DebtService {
    private debtCollection: AngularFirestoreCollection<Debt>;
    debts: Observable<DebtId[]>;
    private debtDoc: AngularFirestoreDocument<Debt>;

    debtToUpdate: Debt;

  constructor(private readonly afs: AngularFirestore) {
      this.debtCollection = afs.collection<Debt>('debts');
      this.debts = this.debtCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
              const data = a.payload.doc.data() as Debt;
              const id = a.payload.doc.id;
              return { id, ...data };
          }))
      );
  }
  getDebts(): Observable<DebtId[]> {
    return this.debts;
  }
  addDebt(debt: Debt): void {
    this.debtCollection.add(debt);
  }
  updateDebt(debt: DebtId): void {
    this.debtToUpdate = {
        name : debt.name,
        amount: debt.amount,
        type: debt.type,
        details: debt.details
    };
    this.debtDoc = this.afs.doc<Debt>(`debts/${debt.id}`);
    this.debtDoc.update(this.debtToUpdate);
  }
  deleteDebt(debt: DebtId): void {
      this.debtDoc = this.afs.doc<Debt>(`debts/${debt.id}`);
      this.debtDoc.delete();
  }
}
