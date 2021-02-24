export let reducer = (state, action) => {
  switch (action.type) {
    case "change":
      state[action.object] = action.value;
      return  state;

    default:
      return state;
  }
};
