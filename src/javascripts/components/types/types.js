import typesData from '../../helpers/data/typesData';
import util from '../../helpers/util';
// import products from '../products/products';

const bindEvents = () => {
  document.getElementById('toCategoriesBtn').addEventListener('click', () => {
    document.getElementById('categories-page').classList.remove('hide');
    document.getElementById('types-page').classList.add('hide');
  });
};

const writeTypes = (types) => {
  let domString = '';
  types.forEach((type) => {
    domString += '<div class="col-3">';
    domString += `<div id='${type.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${type.name}</h5>`;
    domString += `<button class="btn btn-warning see-type">${0} type</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('types', domString);
};

const initTypes = (categorieId) => {
  bindEvents();
  typesData.loadTypesForCategorie(categorieId)
    .then((types) => {
      writeTypes(types);
    })
    .catch(err => console.error(err));
};

export default { initTypes };
