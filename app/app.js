import { store } from './store';
import { changeStatus } from './store/ducks/status';

const statusParagraph = document.querySelector('.status');

document.querySelector('.userName').oninput = (e) => {
  const userName = e.target.value;
  statusParagraph.textContent = userName ? `${e.target.value} is typing` : '';
};

store.subscribe(() => {
  const state = store.getState();

  statusParagraph.textContent = state.status;
});
