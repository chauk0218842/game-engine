import $ from 'jquery';
import * as map from './library/map/map.es6';

$('#world').append(map.renderMap(10, 10));
