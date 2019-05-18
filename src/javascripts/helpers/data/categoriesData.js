import axios from 'axios';

/* contains an axios call .get()
 the data from categories.json,
 then will export the function */

const loadCategories = () => axios.get('../db/categories.json');

export default { loadCategories };
