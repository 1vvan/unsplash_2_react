const initialState = {
    selectedImage: {
            id: "psn1W9mFWps",
            urls: {
                full: ""
            },
            user: {
                name: "",
                location: ""
            },
            description: null,
            alt_description: "",
            likes: 1
        },
}

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_IMAGE":
      return {
        ...state,
        selectedImage: action.payload
      }
    
    default:
      return state
    }
}
