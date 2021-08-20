import { getCustomRepository } from 'typeorm';
import Category from '../models/Category';
import CategoriesRepository from '../repositories/CategoriesRepository';

interface Request {
  category: string;
}

class ManageCategoryService {
  public async execute({ category }: Request): Promise<Category> {
    const categoriesRepository = getCustomRepository(CategoriesRepository);

    const categoryExists = await categoriesRepository.checkCategoryExists(
      category,
    );

    if (categoryExists) {
      return categoryExists;
    }

    const title = category;

    const createdCategory = categoriesRepository.create({
      title,
    });

    await categoriesRepository.save(createdCategory);

    return createdCategory;
  }
}

export default ManageCategoryService;
