import {sayHello, sayWorld} from './js/main.js';
import tpl from './tpl/main.html';
import data from './js/data.js';
import {version} from './js/config.json';
import './style.scss';
import juicer from 'juicer';

let view =  {
  init: function () {
    this.creatDom();
    this.renderPage();
    this.bindEvents();
  },
  data:{
    text: ''
  },
  creatDom: function () {
    this.data.text =  `${juicer(tpl, data)}<p>${version}<p>`;
  },
  renderPage: function () {
    document.querySelectorAll('div.text')[0].innerHTML = this.data.text;
  },
  bindEvents: function () {
    document.querySelectorAll('button.hello')[0].onclick = ()  => {
      document.querySelectorAll('p.dom')[0].innerHTML = sayHello();
    };
    document.querySelectorAll('button.world')[0].onclick = () => {
      document.querySelectorAll('p.dom')[0].innerHTML = sayWorld();
    };
  }
};

view.init();
