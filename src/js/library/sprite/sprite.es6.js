/* global document */

import $ from 'jquery';

const SPRITE_BACKGROUND_COLOR = '#555';
const SPRITE_BORDER_CSS = '1px solid #555';
const SPRITE_TILE_WIDTH = 10;

export const renderSprite = (id, bgColor = SPRITE_BACKGROUND_COLOR, width = SPRITE_TILE_WIDTH) =>
  $('<div>')
    .attr('id', id)
    .addClass('sprite')
    .css('background', bgColor)
    .css('width', `${width}px`)
    .css('height', `${width}px`)
    .css('border', SPRITE_BORDER_CSS)
    .on('click', () => console.log(`Sprite ${id} clicked`));

export default renderSprite;
