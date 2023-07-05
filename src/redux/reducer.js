const initialState = {
  data: [],
  loading: false,
  error: null,
  user: {
    email: '',
    password: '',
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };

    case "UPDATE_DATA":
      const updatedData = state.data.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.newName }
          : item
      );
      return {
        ...state,
        data: updatedData,
      };

      case 'REGISTER_USER':
      return {
        ...state,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };

    // Other cases...
    default:
      return state;
  }
};

export default dataReducer;
