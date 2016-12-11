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
  let pos = ($player.position().left || 0) - 11;
  pos = pos < boundary.left ? boundary.left : pos;
  $player.css('left', `${pos}px`);
};

keyboardControls[KEYS.UP_ARROW] = (elemId, boundary) => {
  const $player = $(`#${elemId}`);
  let pos = ($player.position().top || 0) - 11;
  pos = pos < boundary.top ? boundary.top : pos;
  $player.css('top', `${pos}px`);
};

keyboardControls[KEYS.RIGHT_ARROW] = (elemId, boundary) => {
  const $player = $(`#${elemId}`);
  const curPos = $player.position().left;
  let pos = (curPos || 0) + 11;
  pos = pos >= boundary.right ? curPos : pos;
  $player.css('left', `${pos}px`);
};

keyboardControls[KEYS.DOWN_ARROW] = (elemId, boundary) => {
  const $player = $(`#${elemId}`);
  const curPos = $player.position().top;
  let pos = (curPos || 0) + 11;
  pos = pos >= boundary.bottom ? curPos : pos;
  $player.css('top', `${pos}px`);
};

export default keyboardControls;
