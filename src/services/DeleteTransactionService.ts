import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';
import checkIfValidUUID from './CheckValidUUIDService';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute(id: Request): Promise<void> {
    const isValidUUID = checkIfValidUUID(id.id);

    if (!isValidUUID) {
      throw new AppError('Invalid ID format');
    } else {
      const transactionsRepository = getCustomRepository(
        TransactionsRepository,
      );

      const transaction = await transactionsRepository.count(id);

      if (!transaction) {
        throw new AppError('Transaction not found');
      }

      await transactionsRepository.delete(id);
    }
  }
}

export default DeleteTransactionService;
