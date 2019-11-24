const INITIAL_STATE = { actualizeInput: '' };

const InputReducer = (state = INITIAL_STATE, action) => {
  const { text } = state;
  console.log('entro en los reducers InputReducer');
  switch (action.type) {
    case 'ACTUALIZE_INPUT_VALUE': {
      return { actualizeInput: text };
    }
    default: {
      return state
    }
  }
}

export default InputReducer;