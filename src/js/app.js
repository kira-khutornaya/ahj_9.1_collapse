import Collapse from './Collapse';

const container = document.querySelector('.container');

new Collapse(
  container,
  'Collapse 1',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi ad magnam tenetur odit, hic perferendis, aperiam laudantium, ea saepe magni maiores nemo delectus! Quod, quos? Molestias!',
).bindToDOM();

new Collapse(
  container,
  'Collapse 2',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nihil doloribus modi! Magnam!',
).bindToDOM();
