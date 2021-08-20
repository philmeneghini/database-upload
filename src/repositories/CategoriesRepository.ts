import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async checkCategoryExists(
    title: string,
  ): Promise<Category | undefined> {
    const category = await this.findOne({ title });

    return category;
  }
}

export default CategoriesRepository;
