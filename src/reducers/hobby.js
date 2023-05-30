const initialState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  let newList;
  switch (action.type) {
    case "ADD_HOBBY":
      newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };

    case "ACTIVE_HOBBY_ID":
      const newHobbyId = action.payload;
      return {
        ...state,
        activeId: newHobbyId,
      };
    case "DELETE_HOBBY":
      newList = [...state.list];
      newList = newList.filter((hobby) => hobby.hobbyId !== action.payload);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};
export default hobbyReducer;
