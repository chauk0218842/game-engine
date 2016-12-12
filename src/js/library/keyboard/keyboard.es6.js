import $ from 'jquery';

const KEYS = {
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40,
};

export const keyboardControls = {};

keyboardControls[KEYS.LEFT_ARROW] = (elemId, boundary) => {
  const $player = $(`#${elemId}`);
  const pos = ($player.position().left || 0) - 11;
  $player.css('left', `${(boundary.left - pos) > 0 ? boundary.left : pos}px`);
};

keyboardControls[KEYS.UP_ARROW] = (elemId, boundary) => {
  const $player = $(`#${elemId}`);
  const pos = ($player.position().top || 0) - 11;
  $player.css('top', `${(boundary.top - pos) > 0 ? boundary.top : pos}px`);
};

keyboardControls[KEYS.RIGHT_ARROW] = (elemId, boundary) => {
  const $player = $(`#${elemId}`);
  const pos = ($player.position().left || 0) + 11;
  $player.css('left', `${(boundary.right - pos) < 0 ? boundary.right : pos}px`);
};

keyboardControls[KEYS.DOWN_ARROW] = (elemId, boundary) => {
  const $player = $(`#${elemId}`);
  const pos = ($player.position().top || 0) + 11;
  $player.css('top', `${(boundary.bottom - pos) < 0 ? boundary.bottom : pos}px`);
};

export default keyboardControls;
