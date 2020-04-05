// root reducer codes

const initialState = {
  isLoading: false,
  user: {},
  isAuthenticated: false,
  error: null,
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'AUTH_SUCCESS': {
      return {
        ...state,
        user: { ...action.payload },
        isAuthenticated: true,
        error: null,
        isLoading: false,
      };
    }
    case 'AUTH_ERROR': {
      return {
        ...state,
        error: action.error,
        isAuthenticated: false,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default currentUser;
