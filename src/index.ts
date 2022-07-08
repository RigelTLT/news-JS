import App from './components/app/app';
import './global.css';
import {addFilter, hideBlock} from './filter/filter';
const app = new App();
app.start();
window.onload = addFilter;