import React, { useState } from "react";

const ItemList = (props) => {
  const [editting, setEditting] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleEdit = () => {
    setEditting(true);
    setEditedValue(props.item);
  };

  const handleSave = () => {
    props.editBtn(props.idx, editedValue);
    setEditting(false);
  };

  const checking = () => {
    setIsChecked(!isChecked);
  };


  return (
    <div className="ulcontainer">
      <ul class="list-group parent itemul">
        {editting ? (
          <li class="list-group-item d-flex" style={{ width: "35rem" }}>
            <input
              type="text"
              className="editinpt"
              value={editedValue}
              onChange={handleChange}
              placeholder="Enter task"
            />
            <button
              type="button"
              class="btn editsave"
              onClick={() => {
                handleSave();
              }}
            >
              Save
            </button>
          </li>
        ) : (
          <li
            class="list-group-item d-flex justify-content-between "
            style={{ width: "35rem" }}
          >
            <div class="form-check check">
              <input
                class="form-check-input"
                type="checkbox"
                value="checked"
                checked={isChecked}
                id="flexCheckDefault"
                onChange={checking}
              />
              <label class="form-check-label" for="flexCheckDefault"></label>
            </div>
            <p
              className="flex-grow-1 ulp"
              style={{ textDecoration: isChecked ? "line-through" : "none" }}
            >
              {props.item}
            </p>
            <button
              type="button"
              class="editbtn"
              onClick={() => {
                handleEdit();
              }}
            >
              <i class="fa-solid fa-pen-to-square symbol"></i>
            </button>
            <button
              type="button"
              class="rmvbtn"
              onClick={() => {
                props.rmvbtn(props.idx);
                setIsChecked(false)
              }}
            >
              <i class="fa-solid fa-trash symbol"></i>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ItemList;
