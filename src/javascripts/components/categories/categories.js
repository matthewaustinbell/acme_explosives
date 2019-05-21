import $ from 'jquery';

import categoriesData from '../../helpers/data/categoriesData';
import typeData from '../../helpers/data/typesData';
import util from '../../helpers/util';

import types from '../types/types';

const seeTypeDiv = (e) => {
  const categorieId = e.target.closest('.card').id;
  $('#categories-page').addClass('hide');
  $('#types-page').removeClass('hide');
  types.initTypes(categorieId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-type');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seeTypeDiv);
  }
};

/* a domString to print the categories as cards to the page
using util.printToDom('categories', domString)

// jQuery's each, iterates over and returns jQuery objects, */

const writeCategories = (categories) => {
  console.error(categories);
  let domString = '';
  categories.forEach((category) => {
    domString += '<div class="col-3">';
    domString += `<div id='${category.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${category.name}</h5>`;
    domString += `<button class="btn btn-warning see-type">${category.types.length} type</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-categories', domString);
  bindEvents();
};


/* .then() method that takes the parameter resp
 and calls in the body writeCategories(resp.data.categories) */

const initCategories = () => {
  categoriesData.loadCategories()
    .then(resp => typeData.getTypesForEachCategorie(resp.data.categories))
    .then((categoriesWithTypes) => {
      writeCategories(categoriesWithTypes);
    });
};

export default { initCategories };
