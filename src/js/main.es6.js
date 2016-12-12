/* global document */

import _ from 'lodash';
import $ from 'jquery';
import * as map from './library/map/map.es6';
import * as sprite from './library/sprite/sprite.es6';
import * as keyboard from './library/keyboard/keyboard.es6';

const ELEM_ID = {
  WORLD: 'world',
  PLAYER_SPRITE: 'sprite-player',
};

/**
 * Map constants
 * @type {{WIDTH: number, HEIGHT: number}}
 */
const mapBoundary = {
  top: 0,
  left: 0,
  right: (10 * (10 - 1)) + (10 - 1),
  bottom: (10 * (10 - 1)) + (10 - 1),
};

/**
 * Map component
 */
const $map = map.renderMap(10, 10)
  .css('position', 'absolute')
  .css('zIndex', 0);

/**
 * Player sprite component
 */
const $sprite = sprite.renderSprite(ELEM_ID.PLAYER_SPRITE)
  .css('position', 'absolute')
  .css('zIndex', 1)
  .css('left', '0px');

/**
 * World component
 * @type {*}
 */
const $world = $(`#${ELEM_ID.WORLD}`);

$world.css('position', 'relative')
  .append($map)
  .append($sprite);

$(document).on('keydown', evt => !_.isNil($(`#${ELEM_ID.PLAYER_SPRITE}`)) &&
keyboard.keyboardControls[evt.which] &&
keyboard.keyboardControls[evt.which](ELEM_ID.PLAYER_SPRITE, mapBoundary));
