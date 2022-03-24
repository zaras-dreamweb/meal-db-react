import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap'
import './Meal.css'


const Meal = ({ meal, addToMealCart }) => {
    const { strMeal, strInstructions, strMealThumb, strCategory } = meal;
    // console.log(meal);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <p><strong>Catagory:</strong> {strCategory}</p>
                    <Card.Text><strong>Instructions:</strong> {strInstructions.slice(0, 100)}</Card.Text>

                </Card.Body>

                <button className='btn-cart' onClick={() => addToMealCart(strMeal)}>
                    <p className='cart-info'>Add To Cart</p>
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </button>
            </Card>


        </div>
    );
};

export default Meal;