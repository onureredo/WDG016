const recipeList = document.querySelector('#recipe-list');
const recipeIframe = document.querySelector('#recipe-iframe');

recipeList.addEventListener('change', function () {
  const selectedRecipe = recipeList.value;
  recipeIframe.src = selectedRecipe;
});
