const languageReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_LANGUAGE':
        return {
          language: state.language === 'Slovak' ? 'English' : 'Slovak',
        };
      default:
        return state;
    }
  };
  
  export default languageReducer;
  