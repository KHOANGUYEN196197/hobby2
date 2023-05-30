import { useEffect, useState } from "react";
import {
  activeHobby,
  addNewHobby,
  deleteHobby,
  editHobby,
  filterHobby,
} from "../../action/hobby";
import HobbyList from "../../component/HobbyList";

import { useDispatch, useSelector } from "react-redux";

function Hobby() {
  const hobbyList = useSelector((state) => state.hobby.list);
  const hobbyListFilter = useSelector((state) => state.hobby.listFilter);
  const hobbyId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();
  const [hobby, setHobby] = useState("");
  const [hobbyFilter, setHobbyFilter] = useState("");
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
  const changeHobbyFilter = (event) => {
    setHobbyFilter(event.target.value);
    console.log(hobbyFilter);
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
  const clickEditHobby = (hobby) => {
    if (hobby) {
      dispatch(editHobby(hobby));
    }
  };
  const filterHobbyByName = () => {
    console.log("vo day", hobbyFilter);
    dispatch(filterHobby(hobbyFilter));
  };
  return (
    <div className="box-hobby" style={{ padding: 30 }}>
      <button className="width-btn" onClick={addHobbyByRandom}>
        Random Hobby
      </button>{" "}
      &nbsp;OR &nbsp;
      <input
        type="text"
        name="hobby"
        value={hobby}
        onChange={(event) => changeHobby(event)}
      />
      &nbsp;
      <button className="width-btn" onClick={addHobbyByInput}>
        Add
      </button>
      &nbsp; &nbsp;
      {hobbyList.length > 0 ? (
        <>
          <label for="filterHobby">Filter by Name</label> &nbsp;
          <input
            type="text"
            name="hobbyFilter"
            value={hobbyFilter}
            onChange={(event) => changeHobbyFilter(event)}
          />
          &nbsp;
          <button className="width-btn" onClick={filterHobbyByName}>
            Filter
          </button>
        </>
      ) : (
        ""
      )}
      <br /> <br />
      <HobbyList
        hobbyListFilter={hobbyListFilter}
        hobbyList={hobbyList}
        hobbyId={hobbyId}
        onClickActive={clickHobby}
        onClickDeleteHobby={clickDeleteHobby}
        onClickEditHobby={clickEditHobby}
      />
    </div>
  );
}
export default Hobby;
