import App from './components/app/app';
import './global.css';
import { addFilter } from './filter/filter';
const app = new App();
app.start();
window.onload = addFilter;
