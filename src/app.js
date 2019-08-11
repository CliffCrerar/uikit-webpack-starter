import app from './index';
import './style.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
app.classList.add('app-element');

document.body.prepend(app);