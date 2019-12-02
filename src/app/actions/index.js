import {
  SET_ERROR_MESSAGE,
  SET_DRAWER_VISIBILITY,
} from '_constants/action-types';

export const setErrorMessage = error => ({
  type: SET_ERROR_MESSAGE,
  payload: error,
});

export const showDrawer = show => ({
  type: SET_DRAWER_VISIBILITY,
  payload: show,
});
