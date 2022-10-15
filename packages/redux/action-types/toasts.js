import keyMirror from 'keymirror';

const syncActionSet = keyMirror({
  SHOW_TOAST: undefined,
  HIDE_TOAST: undefined,
});

export default { ...syncActionSet };
