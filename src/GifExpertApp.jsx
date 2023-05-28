import { useState } from 'react';
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (inputValue) => {
        if (categories.includes(inputValue)) return;
        setCategories([inputValue, ...categories]);
    };

    const onDeletedCategory = (e) => {
        const deletedCategory = e.target.previousSibling.innerText;
        const responseCategories = categories.filter(category => category !== deletedCategory);
        setCategories(responseCategories);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} onDeletedCategory={onDeletedCategory} />
                ))
            }
        </>
    )
};
