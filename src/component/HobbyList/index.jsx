import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

HobbyList.defaultProps = {
  hobbyList: [],
  hobbyListFilter: [],
  hobbyId: null,
  onClickActive: null,
  onClickDeleteHobby: null,
  onClickEditHobby: null,
};

HobbyList.propTypes = {
  hobbyListFilter: PropTypes.array,
  hobbyList: PropTypes.array,
  hobbyId: PropTypes.number,
  onClickActive: PropTypes.func,
  onClickDeleteHobby: PropTypes.func,
  onClickEditHobby: PropTypes.func,
};

function HobbyList(props) {
  const [id, setId] = useState(null);
  const [editHobbyName, setEditHobbyName] = useState("");
  const {
    hobbyList,
    hobbyListFilter,
    hobbyId,
    onClickActive,
    onClickDeleteHobby,
    onClickEditHobby,
  } = props;
  const arrayHobby = hobbyListFilter.length > 0 ? hobbyListFilter : hobbyList;

  const activeHobby = (hobbyId) => {
    if (onClickActive) {
      onClickActive(hobbyId);
    }
  };
  const deleteHobby = (hobbyId) => {
    if (onClickDeleteHobby) {
      onClickDeleteHobby(hobbyId);
    }
  };
  const editHobby = (hobby) => {
    if (onClickEditHobby) {
      const data = {
        hobbyId: hobby.hobbyId,
        hobbyName: editHobbyName,
      };
      onClickEditHobby(data);
      setId("");
      setEditHobbyName("");
    }
  };
  const editHobbyId = (hobby) => {
    setId(hobby.hobbyId);
    setEditHobbyName(hobby.hobbyName);
  };
  const handleCancel = (hobby) => {
    setId("");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="box">
          {arrayHobby.map((res) => {
            return (
              <div
                className={`hobbyItem ${
                  res.hobbyId === hobbyId ? "active" : ""
                }`}
                key={res.hobbyId}
              >
                {id === res.hobbyId ? (
                  <>
                    <input
                      type="text"
                      name="hobby"
                      value={editHobbyName}
                      onChange={(e) => {
                        setEditHobbyName(e.target.value);
                      }}
                      className="editInput"
                    />
                    <div className="box-btn">
                      <button
                        onClick={() => {
                          editHobby(res);
                        }}
                        type="submit"
                        className="saveButton"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        type="submit"
                        className="saveButton"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <span
                      onClick={() => {
                        activeHobby(res.hobbyId);
                      }}
                      className="hobbyName"
                    >
                      {res.hobbyName}
                    </span>
                    <div className="box-btn">
                      <button
                        onClick={() => {
                          editHobbyId(res);
                        }}
                        className="editButton"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          deleteHobby(res.hobbyId);
                        }}
                        className="deleteButton"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default HobbyList;
