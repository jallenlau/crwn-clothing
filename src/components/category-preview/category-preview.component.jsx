import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'

const CategoryPreview = ({ title, category }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title'>{title.toUpperCase()}</span>
            </h2>
           <div className='preview'>
            {category
                .filter((_, idx) => idx < 4)
                .map((product) =>
                    <ProductCard key={product.id} product={product} />
                )}  
           </div>    
        </div>
    );
};

export default CategoryPreview;