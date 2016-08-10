import { select } from 'd3-selection';

select('#greeting')
  .html(`
    Hello, world!
    The time is <time>${Date.now()}</time>.
  `);
