import React from 'react'
import MealItem from '../meal-item/MealItem';

function MealsGrid({ meals }) {
  return (
    <div className='my-10'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
        {meals.map((meal) => (
          <li key={meal.id} className="flex">
            <MealItem title={meal.title} slug={meal.slug} image={meal.image} summary={meal.summary} creator={meal.creator} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MealsGrid;