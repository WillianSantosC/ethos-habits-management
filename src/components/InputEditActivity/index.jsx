import { useState, useContext } from "react";
import api from "../../services/api";
import { AccessContext } from "../../providers/Access";
import toast from "react-hot-toast";
import { LittleButton } from "./styles";

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
          toast.success("Edição concluída");
        })
        .catch((err) => {
          setIsShow(false);
          toast.error("Falha ao editar");
        });
    } else {
      toast.error("Campo vazio, insira um novo título");
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

      <LittleButton onClick={() => EditActivity(id, newTitle)}>
        Save
      </LittleButton>
    </div>
  );
};

export default InputEditActivity;
