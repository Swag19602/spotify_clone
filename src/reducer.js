export const initalState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:"BQD71hEmXLjAH1fipKyQYawUYPtAUIBQNGd_j53tamp5i-3GqviPGZo2d5Ybq5fua_vvD4F9lRxu0qrh7v4GpPVyZXbgDZ-K-8XrJRnza47OTpsCZKk53GHTAOcNusGiup6uIXE4x-RnHXac8GezgmRq8ASPN0EilsxLyZLN_Qr3SZ52u_pH"
};

const reducer = (state, action) => {
  console.log(action);


  switch (action.type) {
    case "SET_USER": 
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
        return{
            ...state,
            token: action.token
        };
    case "SET_PLAYLISTS":
        return{
          ...state,
          playlists: action.playlists,
        };
    case 'SET_DISCOVER_WEEKLY':
      return{
        ...state,
        discover_weeekly: action.discover_weeekly,
      }
    default:
      return state;
  }
};
export default reducer;
