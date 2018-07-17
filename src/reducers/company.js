const DEFAULT_STATE = {
  companies: [],
  company: {}
}
export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'STORE_COMPANIES':
      return {
        companies: action.companies
      };
    case 'SET_COMPANY':
      return {
        company: action.company
      };
    default:
      return state;
  }
};
