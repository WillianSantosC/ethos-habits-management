import { useState } from "react";
import { TiEdit } from "react-icons/ti";
import InputEditActivity from "../InputEditActivity";

const InputActivity = ({ item }) => {
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
      {isShow && <InputEditActivity setIsShow={setIsShow} id={item.id} />}
    </>
  );
};

export default InputActivity;
