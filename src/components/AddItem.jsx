import React, { useState } from "react";

const AddItem = (props) => {
  const [name, setName] = useState("");

  const change = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="formvadu">
      <form
        className=" mt-4 form"
        onSubmit={(e) => {
          e.preventDefault();
           if (name == "") {
            alert("Enter Task");
          } else {
           
            props.addTask(name);
            setName("");
          }
        }}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control inpt"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Add Task"
            value={name}
            onChange={change}
          />
        </div>

        <button type="submit" className="btn addbtn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
