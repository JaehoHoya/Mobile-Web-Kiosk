import styles from './style.module.css';


interface CategoryButtonProps {
  categoryId: number;
  categoryName: string;
  onclick:()=>void;
  isActive: boolean;
}

export default function CategoryButton({ categoryId, categoryName,onclick,isActive}: CategoryButtonProps) {
  

  return (
    <button className={`${styles.categoryButton} ${isActive ? styles.active : ''}`} onClick={onclick}>
      {categoryName}
    </button>
  );
}