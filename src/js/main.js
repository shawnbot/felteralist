import { select } from 'd3-selection';

select('#greeting')
  .text(`Hello, world! The time is ${Date.now()}.`);
