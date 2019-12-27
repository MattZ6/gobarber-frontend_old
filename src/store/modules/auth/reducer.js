import produce from 'immer';

import ActionTypes from '~/store/modules/auth/types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });

    default:
      return state;
  }
}