const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      avatarURL:
        "https://previews.123rf.com/images/studiostoks/studiostoks1708/studiostoks170800016/84215159-surprise-woman-pop-art-avatar-character-icon.jpg",
      followed: true,
      name: "Дмитрий",
      status: "I-m the frontend developer",
      location: { country: "Russia", city: "Sochi" }
    },
    {
      id: 2,
      avatarURL:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/21514027/original/bf55eef1cfc1ba545ac9153cedebf61abe38af8a/create-your-pop-art-avatar-from-your-image.jpg",
      followed: false,
      name: "Алексей",
      status: "I-m the backend developer",
      location: { country: "Russia", city: "Saint-Petersburg" }
    },
    {
      id: 3,
      avatarURL:
        "https://previews.123rf.com/images/studiostoks/studiostoks1707/studiostoks170700393/83085765-avatar-portrait-of-a-man-straightens-his-tie-pop-art-retro-vector-illustration.jpg",
      followed: true,
      name: "Сергей",
      status: "I-m the fullstack developer",
      location: { country: "Germany", city: "Berlin" }
    }
  ]
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      };
    }
    default:
      return state;
  }
}

export function followActionCreator(userID) {
  return {
    type: FOLLOW,
    userID
  };
}

export function unFollowActionCreator(userID) {
  return {
    type: UNFOLLOW,
    userID
  };
}

export function setUsersActionCreator(users) {
  return {
    type: SET_USERS,
    users
  };
}

export default usersReducer;
