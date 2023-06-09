import { resources, waveInfo } from '../stats/stats';

const wave = document.querySelector('#wave');
const heart = document.querySelector('#heart');
const hrn = document.querySelector('#money').firstElementChild;
const cop = document.querySelector('#money').lastElementChild;

export function showStats() {
  wave.innerHTML = `${waveInfo.wave - 1}`;
  heart.innerHTML = `${resources.hearts}`;
  hrn.innerHTML = `${Math.floor(resources.hryvnias / 100)}`;
  cop.innerHTML = `${resources.hryvnias % 100}`;
}
