import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    const addToMealCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart);
    }



    return (
        <div className='container'>
            <div className="meals-container">

                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} addToMealCart={addToMealCart}></Meal>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;