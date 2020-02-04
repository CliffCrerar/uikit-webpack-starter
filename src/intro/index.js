// @ts-nocheck
import uikitimg from '../img/uikit-bg.svg'
import uikitLogo from '../img/uikitlogo.svg';
import { html } from 'lit-html';

const
    introText = 'A lightweight and modular front-end framework \n for developing fast and powerful web interfaces.',
    litHtmlTemplate = html`
        <div class="uk-grid-inner">
            <div class="uk-grid">
                <img class="uikit-bg" src="${uikitimg }" alt="UIkitimg"/>
                <h1 class="uk-text-white uk-width-1-1  uk-text-center">UIkit with webpack starter app</h1>
                <img src="${uikitLogo }" alt="uikit-logo">
                <div class="uk-width-1-1">
                    <p class="uk-text-lead uk-text-center uk-text-white">${introText }</p>
                </div>
            </div>
        </div>`;
export default litHtmlTemplate;