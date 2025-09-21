import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  if (state === 'fulfilled') {
    iziToast.success({
      title: 'Success',
      message: `Operation fulfilled after ${delay} ms`,
      position: 'topRight',
      timeout: delay,
    });
  } else if (state === 'rejected') {
    iziToast.error({
      title: 'Error',
      message: `Operation rejected after ${delay} ms`,
      position: 'topRight',
      timeout: delay,
    });
  }

  form.reset();
});
