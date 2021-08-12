import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const incomes = await this.find({
      type: 'income',
    });

    const outcomes = await this.find({
      type: 'outcome',
    });

    const sumIncome = incomes
      .map(transaction => {
        return transaction.value;
      })
      .reduce((acc, curr) => acc + curr, 0);

    const sumOutcome = outcomes
      .map(transaction => {
        return transaction.value;
      })
      .reduce((acc, curr) => acc + curr, 0);

    const balance = {
      income: sumIncome,
      outcome: sumOutcome,
      total: sumIncome - sumOutcome,
    };

    return balance;
  }
}

export default TransactionsRepository;
