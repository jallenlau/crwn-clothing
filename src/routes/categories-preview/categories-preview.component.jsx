import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from '../../components/category-preview/category-preview.component'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    
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