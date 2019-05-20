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
    domString += `<img src="${type.imageUrl}" alt="type image">`;
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
