
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One Punch']); // , 'Dragon Ball'

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory);

        if ( categories.includes(newCategory) ) return;

        // const category = 'Spiderman';
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, category ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }

        </>
    )
}
