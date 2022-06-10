import { useSelector } from "react-redux";

import { selectCategoriesMap } from '../../store/categories/category.selector'
import CategoryPreview from '../../components/category-preview/category-preview.component'

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <div className="shop-container">
            {Object.keys(categoriesMap).map((key) => {
                const category = categoriesMap[key];
                return <CategoryPreview key={key} title={key} category={category} />
            })}
        </div>
    );
};

export default CategoriesPreview;