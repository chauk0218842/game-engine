import $ from 'jquery';
import _ from 'lodash';

const renderTile = (id, bgColor = '#CCC', width = '10') =>
  $('<div>')
    .attr('renderTile-', id)
    .addClass('renderTile')
    .css('background', bgColor)
    .css('width', `${width}px`)
    .css('height', `${width}px`)
    .css('float', 'left')
    .css('borderLeft', '1px solid #888')
    .css('borderTop', '1px solid #888')
    .on('click', () => console.log('Tile clicked', id));

export const renderMap = (rows, cols, renderTileWidth = '10') => {
  const $map = $('<div />')
    .css('width', `${cols + (cols * renderTileWidth)}px`)
    .css('height', `${rows + (rows * renderTileWidth)}px`)
    .css('borderRight', '1px solid #888')
    .css('borderBottom', '1px solid #888');

  return _.chain(new Array(rows * cols))
    .reduce(
      ($container, val, index) => {
        const row = parseInt(index / cols, 10);
        const col = index % cols;
        const id = `${row}_${col}`;
        return $container.append(renderTile(id));
      },
      $map)
    .value();
};

export default renderMap;
