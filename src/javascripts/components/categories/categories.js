import util from '../../helpers/util';
import categorieData from '../../helpers/data/categoriesData';
import type from '../types/types';
import typeData from '../../helpers/data/typesData';

const seeTypeDiv = (e) => {
  const categorieId = e.target.closest('.card').id;
  console.error('you clicked a button!', categorieId);
  document.getElementById('categories-page').classList.add('hide');
  document.getElementById('type-page').classList.remove('hide');
  type.initType(categorieId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-type');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seeTypeDiv);
  }
};

const writeCategories = (categories) => {
  let domString = '';
  categories.forEach((categorie) => {
    domString += '<div class="col-3">';
    domString += `<div id='${categorie.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${categorie.name}</h5>`;
    domString += `<button class="btn btn-warning see-type">${categorie.type.length} type</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-categories', domString);
  bindEvents();
};

const initCategories = () => {
  categorieData.loadCategories()
    .then(resp => typeData.gettypeForEachCategorie(resp.data.categories))
    .then((categoriesWithTypes) => {
      writeCategories(categoriesWithtTypes);
    })
    .catch(err => console.error('error from initCategories requests', err));
};

export default { initCategories };
