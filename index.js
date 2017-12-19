'use strict';

const cheerio = require('cheerio');
const got = require('got');

const url = 'sindresorhus.com';

got(url).then(content => parse(cheerio.load(content.body)))
.then(d => console.log(d.join(',')));

function parse(dom) {
  const elts = dom('section.hero div#latest-repos-container h2');
  return arrayzer(elts).map(elt => new MyObj(elt.firstChild.data));
}

function arrayzer(node) {
  return Array.prototype.slice.apply(node);
}

function MyObj(str) {
  this.name = str;
}

MyObj.prototype.toString = function () {
  return this.name.toString();
};
