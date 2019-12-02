import {SET_DRAWER_VISIBILITY} from '_constants/action-types';

const drawer = (state = false, action) => {
  switch (action.type) {
    case SET_DRAWER_VISIBILITY:
      return action.payload;
    default:
      return state;
  }
};

export default drawer;
