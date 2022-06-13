import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from '../category/category.component'
import { setCategories } from '../../store/categories/category.action'
import { getCategoriesAndDocuments } from '../../utiles/firebase/firebase.utiles'


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments();
            dispatch(setCategories(categories));
        };
        getCategoriesMap();
      },[]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
        );
};

export default Shop;