export const addNewHobby = (hobby) => {
  return {
    type: "ADD_HOBBY",
    payload: hobby,
  };
};

export const activeHobby = (hobby) => {
  return {
    type: "ACTIVE_HOBBY_ID",
    payload: hobby,
  };
};
export const deleteHobby = (hobby) => {
  return {
    type: "DELETE_HOBBY",
    payload: hobby,
  };
};
