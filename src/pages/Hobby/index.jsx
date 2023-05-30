import { useEffect, useState } from "react";
import { activeHobby, addNewHobby, deleteHobby } from "../../action/hobby";
import HobbyList from "../../component/HobbyList";

import { useDispatch, useSelector } from "react-redux";

function Hobby() {
  const hobbyList = useSelector((state) => state.hobby.list);
  const hobbyId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();
  const [hobby, setHobby] = useState("");
  const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
  };
  const addHobbyByRandom = () => {
    const newHobby = {
      hobbyId: randomNumber(),
      hobbyName: `Hobby ${randomNumber()}`,
    };
    dispatch(addNewHobby(newHobby));
  };
  const clickHobby = (id) => {
    const activeHobbyId = id;
    dispatch(activeHobby(activeHobbyId));
  };
  const clickDeleteHobby = (id) => {
    const deleteHobbyId = id;
    dispatch(deleteHobby(deleteHobbyId));
  };
  const changeHobby = (event) => {
    setHobby(event.target.value);
  };
  const addHobbyByInput = () => {
    if (hobby) {
      const newHobby = {
        hobbyId: randomNumber(),
        hobbyName: hobby,
      };
      dispatch(addNewHobby(newHobby));
      setHobby("");
    }
  };
  return (
    <div className="box-hobby">
      <button onClick={addHobbyByRandom}>Random Hobby</button> &nbsp;OR &nbsp;
      <input
        type="text"
        name="hobby"
        value={hobby}
        onChange={(event) => changeHobby(event)}
      />
      <button onClick={addHobbyByInput}>Add</button>
      <br /> <br />
      <HobbyList
        hobbyList={hobbyList}
        hobbyId={hobbyId}
        onClickActive={clickHobby}
        onClickDeleteHobby={clickDeleteHobby}
      />
    </div>
  );
}
export default Hobby;
