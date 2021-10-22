import { useState } from "react";
import { TiEdit } from "react-icons/ti";
import InputEditGroup from "../InputEditGroup";

const EditGroup = ({ item }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <TiEdit
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        Edit Activity
      </TiEdit>
      {isShow && <InputEditGroup setIsShow={setIsShow} id={item.id} />}
    </>
  );
};

export default EditGroup;
