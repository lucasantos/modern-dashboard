import _ from 'lodash';
import './assets/sass/main.scss';

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Modern", "Dashboard"], " ");
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());