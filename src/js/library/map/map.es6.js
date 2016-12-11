import $ from 'jquery';
import _ from 'lodash';

const TILE_BORDER_CSS = '1px solid #BBB';
const TILE_BACKGROUND_COLOR = '#DDD';
const TILE_WIDTH = 10;

const renderTile = (id, bgColor = TILE_BACKGROUND_COLOR, width = TILE_WIDTH) =>
  $('<div>')
    .attr('tile-', id)
    .addClass('tile')
    .css('background', bgColor)
    .css('width', `${width}px`)
    .css('height', `${width}px`)
    .css('float', 'left')
    .css('borderLeft', TILE_BORDER_CSS)
    .css('borderTop', TILE_BORDER_CSS)
    .on('click', () => console.log('Tile clicked', id));

export const renderMap = (rows, cols, renderTileWidth = TILE_WIDTH) => {
  const $map = $('<div />')
    .css('width', `${cols + (cols * renderTileWidth)}px`)
    .css('height', `${rows + (rows * renderTileWidth)}px`)
    .css('borderRight', TILE_BORDER_CSS)
    .css('borderBottom', TILE_BORDER_CSS);

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
