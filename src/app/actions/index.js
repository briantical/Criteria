import {SET_ERROR_MESSAGE} from '_constants/action-types';

export const setErrorMessage = error => ({
  type: SET_ERROR_MESSAGE,
  payload: error,
});
