import type { MenuCategory } from "../../types/Item";
import "./styles.scss"

type AsideProps = {
  categories: MenuCategory[];
  handleClick: (index:number) => void;
  activeIndex: number;
};


export default function Aside({ categories,handleClick,activeIndex }: AsideProps) {
  return (
    <div className="aside">
      {categories.map((category, index) => (
        <div
          onClick={()=>{handleClick(index)}}
          key={index}
          className={`aside__category-title ${(activeIndex == index)? "aside__category-title--active" : null}` }
        >
          {category.category_title}
        </div>
      ))}
    </div>
  );
}
