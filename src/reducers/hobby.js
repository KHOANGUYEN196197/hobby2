import LIST_HOBBY from "../constants/mockData";

const initialState = {
  list: LIST_HOBBY,
  activeId: null,
  listFilter: [],
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
    case "EDIT_HOBBY":
      newList = [...state.list];
      const index = newList.findIndex(
        (element) => element.hobbyId === action.payload.hobbyId
      );
      const updatedElement = action.payload;

      newList[index] = updatedElement;
      return {
        ...state,
        list: newList,
      };
    case "FILTER_HOBBY":
      if (action.payload) {
        newList = [...state.list];
        newList = newList.filter((hobby) => hobby.hobbyName === action.payload);
        return {
          ...state,
        listFilter: newList,
        };
      } else {
        return {
          ...state,
          listFilter: [],
        };
      }

    default:
      return state;
  }
};
export default hobbyReducer;
