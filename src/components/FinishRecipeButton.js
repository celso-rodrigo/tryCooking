import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function FinishRecipeButton({ recipeObj, isDrink, doneIngredients }) {
  const history = useHistory();
  const {
    strArea,
    idDrink,
    strDrink,
    strAlcoholic,
    strCategory,
    strDrinkThumb,
    strMeal,
    idMeal,
    strMealThumb,
    strTags,
  } = recipeObj;

  const doneRecipeDate = new Date().toLocaleDateString();

  const doneRecipeShape = {
    id: isDrink ? idDrink : idMeal,
    type: isDrink ? 'drink' : 'food',
    nationality: strArea || '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic || '',
    name: isDrink ? strDrink : strMeal,
    image: isDrink ? strDrinkThumb : strMealThumb,
    doneDate: doneRecipeDate,
    tags: strTags || '',
  };

  const handleDoneRecipes = () => {
    if (localStorage.getItem('doneRecipes') === null) {
      localStorage.setItem('doneRecipes', JSON.stringify([doneRecipeShape]));
    } else {
      const oldData = localStorage.getItem('doneRecipes');
      const recuperedData = JSON.parse(oldData);
      const newArray = [...recuperedData, doneRecipeShape];
      localStorage.setItem('doneRecipes', JSON.stringify(newArray));
    }
    history.push('/done-recipes');
  };

  return (
    <div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ doneIngredients }
        onClick={ handleDoneRecipes }
      >
        Finish Recipe
      </button>
    </div>
  );
}

FinishRecipeButton.propTypes = {
  recipeObj: PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
    idMeal: PropTypes.string,
    strArea: PropTypes.string,
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strTags: PropTypes.string,
  }).isRequired,
  isDrink: PropTypes.bool.isRequired,
  doneIngredients: PropTypes.bool.isRequired,
};

export default FinishRecipeButton;