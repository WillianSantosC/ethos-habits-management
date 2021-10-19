import { useState, useContext } from "react";
import api from "../../services/api";
import { AccessContext } from "../../providers/Access";

const InputEditActivity = ({ setIsShow, id }) => {
  const { token } = useContext(AccessContext);

  const [newTitle, setNewTitle] = useState("");

  function EditActivity(id, newTitle) {
    const jsonToApi = {
      title: newTitle,
    };

    if (newTitle !== "") {
      api
        .patch(`/activities/${id}/`, jsonToApi, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsShow(false);
          console.log(res);
        })
        .catch((err) => {
          setIsShow(false);
          console.log(err);
        });
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="New Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      ></input>
      <button onClick={() => EditActivity(id, newTitle)}>Save</button>
    </div>
  );
};

export default InputEditActivity;
