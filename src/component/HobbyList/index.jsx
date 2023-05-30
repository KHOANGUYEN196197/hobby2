import React from "react";
import PropTypes from "prop-types";
import "./style.css";

HobbyList.defaultProps = {
  hobbyList: [],
  hobbyId: null,
  onClickActive: null,
  onClickDeleteHobby: null,
};

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  hobbyId: PropTypes.number,
  onClickActive: PropTypes.func,
  onClickDeleteHobby: PropTypes.func,
};

function HobbyList(props) {
  const { hobbyList, hobbyId, onClickActive, onClickDeleteHobby } = props;
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

  return (
    <React.Fragment>
      <ul>
        {hobbyList.map((res) => {
          return (
            <li
              className={res.hobbyId === hobbyId ? "active" : ""}
              key={res.hobbyId}
            >
              <span
                onClick={() => {
                  activeHobby(res.hobbyId);
                }}
              >
                {res.hobbyName}
              </span>{" "}
              &nbsp; &nbsp;
              <button
                onClick={() => {
                  deleteHobby(res.hobbyId);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
export default HobbyList;
