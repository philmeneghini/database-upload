// import AppError from '../errors/AppError';

import Category from '../models/Category';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class CreateTransactionService {
  public async execute({ id, title, type, value, category_id }: Transaction): Promise<Transaction> {

    const transaction = TransactionsRepository.create({

    })
  }
}

export default CreateTransactionService;
