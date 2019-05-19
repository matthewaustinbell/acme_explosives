import axios from 'axios';

const loadCategories = () => axios.get('../db/boards.json');

export default { loadCategories };
