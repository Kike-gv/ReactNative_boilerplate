const INITIAL_STATE = { actualizeInput: ''};

const InputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTUALIZE_INPUT_VALUE': {
      return { actualizeInput: action.text };
    }
    default: {
      return state
    }
  }
}

export default InputReducer;