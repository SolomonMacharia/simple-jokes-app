import { Category } from './Category';

type Props = {
  categories: Array<{ name: string }>;
};

export function Categories({ categories }: Props) {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
}