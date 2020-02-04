
import './style.scss';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import litHtmlTemplate from './intro'
import { render, html } from 'lit-html';

UIkit.use(Icons);

const main = html`
	<main class="app-element">
		${litHtmlTemplate}
	</main>`

render(main,document.body)