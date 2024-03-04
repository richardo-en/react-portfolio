const languageReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return {
        language: action.language === 'Slovak' ? 'Slovak' : 'English'
      };
    default:
      return state;
  }
};
  
  export default languageReducer;
  