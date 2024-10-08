import React from 'react'
import "./MealsList.css";
function MealsList() {
  const meals=[{name:"Sushi",desc:"Finest fish and vegies",price:"$22.99"},
               {name:"Schnitzel",desc:"A german speciality",price:"$16.50"},
               {name:"Barbecue Burger",desc:"American,raw,meaty",price:"$52.99"},
               {name:"Green bowl",desc:"Healthy and green",price:"$66.55"},
               {name:"chicken lollipops",desc:"Juicy and crispy",price:"$76.55"}, ];
  return (
    <div className='list-container'>
        <ul>
            {
                meals.map((meal,index)=>(
                    <li key={index}>
                        <div>
                        <h4 className='mealname'>{meal.name}</h4>
                        <p className='mealdesc'>{meal.desc}</p>
                        <p className='mealprice'><b>{meal.price}</b></p>
                        </div>
                        <div className='form-container'>
                                <div className='amount-div'>
                                <h4 className='amount-heading'>Amount</h4>
                                <div className='count-container'>1</div>
                                </div>
                            <button className='add-btn'>+Add</button>
                        </div>
                    </li>
            
                ))
            }
        </ul>
      
    </div>
  )
}

export default MealsList
