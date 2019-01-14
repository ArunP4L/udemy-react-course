import axois from 'axios';

const instance = axois.create({
    baseURL: 'https://burger-builder-2cdea.firebaseio.com/'
});

export default instance;
