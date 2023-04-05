const defaultState = {
  selectedUserImage: {
       accepted_tos: true,
      allow_messages: true,
      badge: null,
      bio: "I use a lot of photos from Unsplash everyday as UI UX Designer. My Unsplash is how I contribute back to the community. You are welcome to use any photos. I would love and feel honored to be credited on your projects. Any donations is much appreciated",
      downloads: 502199,
      first_name: "Lucas",
      followed_by_user: false,
      followers_count: 334,
      following_count: 23,
      for_hire: false,
      id: "dOFEBnV7GWk",
      instagram_username: "zuizuii",
      last_name: "Hoang",
      links: {
          followers: "https://api.unsplash.com/users/zuizuii/followers",
          following: "https://api.unsplash.com/users/zuizuii/following",
          html: "https://unsplash.com/pt-br/@zuizuii",
          likes: "https://api.unsplash.com/users/zuizuii/likes",
          photos: "https://api.unsplash.com/users/zuizuii/photos",
          portfolio: "https://api.unsplash.com/users/zuizuii/portfolio",
          self: "https://api.unsplash.com/users/zuizuii",
      },
      location: "Dallas",
      meta: {
          index: true,
      },
      name: "Lucas Hoang",
      numeric_id: 1031927,
      profile_image: {
          large: "https://images.unsplash.com/profile-1540356493699-20d2f116f7db?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          medium: "https://images.unsplash.com/profile-1540356493699-20d2f116f7db?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          small: "https://images.unsplash.com/profile-1540356493699-20d2f116f7db?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
      },
      social:{
          instagram_username: "zuizuii",
          paypal_email: null,
          portfolio_url: "https://dribbble.com/zuizuihoang",
          twitter_username: "Lucashoang1606",
      },
      total_collections: 0,
      total_likes: 288,
      total_photos: 481,
      twitter_username: "Lucashoang1606",
      updated_at: "2023-04-04T19:41:53Z",
      username: "zuizuii", 
      }
      
}


export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SELECTED_USER_IMAGE":
      return {
        ...state,
        selectedUserImage: action.payload
      }
    
    default:
      return state
    }
}
