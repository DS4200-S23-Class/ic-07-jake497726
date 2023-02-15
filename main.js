const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const MARGINS = {left: 100, right: 50, top: 50, bottom: 50}


const data = [55000, 48000, 27000, 66000, 90000];

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right

const FRAME = d3.select('#vis')

// Scaling functions
const MAX_X = d3.max(data, (d) => {return d});
console.log('Max x: ' + MAX_X);


// scale function
const X_SCALE = d3.scaleLinear()

FRAME.selectAll('points').data(data)enter().append('circle').attr('cx', MARGINS.left).attr('cy', (d) => {return (X_SCALE(d) + MARGINS.top);}).attr('r', 10).attr('class', 'point');


// add an axis
FRAME.append('g').attr('transform', "translate(" + MARGINS.left + "," + MARGINS.top + ")").call(d3.axisLeft(X_SCALE).ticks(6)).attr('font-size', '20px');