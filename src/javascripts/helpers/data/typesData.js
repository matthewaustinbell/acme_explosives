import axios from 'axios';

/* creates the new promise */
/* gets the data from types.json *
/* assigns resp.data.types to variable allTypes */
/* uses filter method with conditional */

const loadTypesForCategorie = categorieId => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const allTypes = resp.data.types;
      const matchingTypes = allTypes.filter(type => type.category === categorieId);
      resolve(matchingTypes);
    })
    .catch(err => reject(err));
});

const getTypesForEachCategorie = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const { types } = resp.data;
      const categoriesWithTypes = categories.map((categorie) => {
        const newCategorie = categorie;
        const matchingTypes = types.filter(type => type.category === categorie.id);
        newCategorie.types = matchingTypes;
        return newCategorie;
      });
      resolve(categoriesWithTypes);
    })
    .catch(err => reject(err));
});

export default { loadTypesForCategorie, getTypesForEachCategorie };
