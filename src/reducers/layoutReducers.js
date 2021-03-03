export const setNewTitle = (state, action) => {
  state.pageHeader = action.payload;
  return state;
};
