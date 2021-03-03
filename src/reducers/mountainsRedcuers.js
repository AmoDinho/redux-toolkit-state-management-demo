export const addNewMountain = (state, action) => {
  state.mountains.push(action.payload);
  return state;
};
