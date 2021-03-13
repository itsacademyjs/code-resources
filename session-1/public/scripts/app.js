'use strict';

console.log('Hello');

var title = React.createElement(
  'p',
  null,
  'Hello World'
);

var element = document.getElementById('first');
ReactDOM.render(title, element);
