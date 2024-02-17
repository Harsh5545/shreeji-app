import React from 'react'
import { useParams } from 'react-router-dom';
import staticData from '../../../../Data';
import CustomCard from '../../CustomCard/CustomCard';
const Category = () => {
    const { categoryId } = useParams();
    const category = staticData.find((category) => category.subCategory === categoryId  );
    console.log(category)
  return (
    <>
    <div>
      <h1 className='text-2xl text-center underline'>{category.subCategory}</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto max-w-screen-xl my-5">
    {category?.product.map((product, index) => (
          <CustomCard key={index}>{product.heading}</CustomCard>
        ))}
      </div>
    </>
  )
}

export default Category
