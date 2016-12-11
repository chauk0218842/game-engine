/* global document */

import _ from 'lodash';
import $ from 'jquery';
import * as map from './library/map/map.es6';
import * as sprite from './library/sprite/sprite.es6';
import * as keyboard from './library/keyboard/keyboard.es6';

const worldId = 'world';
const playerSpriteId = 'sprite-player';

/**
 * Map constants
 * @type {{WIDTH: number, HEIGHT: number}}
 */
const mapBoundary = {
  top: 0,
  left: 0,
  right: (10 * 10) + 10,
  bottom: (10 * 10) + 10,
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
const $sprite = sprite.renderSprite(playerSpriteId)
  .css('position', 'absolute')
  .css('zIndex', 1)
  .css('left', '0px');

/**
 * World component
 * @type {*}
 */
const $world = $(`#${worldId}`);

$world.css('position', 'relative')
  .append($map)
  .append($sprite);

$(document).on('keydown', (evt) => {
  if (_.isNil($(`#${playerSpriteId}`))) {
    return null;
  }
  return keyboard.keyboardControls[evt.which] &&
    keyboard.keyboardControls[evt.which](playerSpriteId, mapBoundary);
});
