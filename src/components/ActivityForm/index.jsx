import * as yup from "yup";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { ActivityContext } from "../../providers/Activity";
import * as moment from "moment";
import "moment/locale/pt-br";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AccessContext } from "../../providers/Access";
import api from "../../services/api";
import { TextField } from "@material-ui/core";
import { Card } from "../SubGroupTasks/style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import InputEditActivity from "../InputEditActivity";

const ActivityForm = () => {
  const { id } = useParams();
  const { groupActivity, getGroupActivity, deleteActivity } =
    useContext(ActivityContext);
  const { token } = useContext(AccessContext);

  const [isShow, setIsShow] = useState(false);

  function CallEditComponent() {
    setIsShow(true);
  }

  const schema = yup.object().shape({
    titleActivity: yup.string().required("Required Field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  getGroupActivity(id);

  function onSubmitActivity({ titleActivity }) {
    const data = {
      title: titleActivity,
      realization_time: "2021-11-20T15:00:00Z",
      group: id,
    };
    api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        console.log(data);
      });
  }
  return (
    <>
      <h1>Activities</h1>
      <form onSubmit={handleSubmit(onSubmitActivity)} className="formInputs">
        <h2>Add Activity</h2>

        <TextField
          size="small"
          margin="none"
          type="text"
          variant="outlined"
          error={!!errors.titleActivity}
          helperText={errors.titleActivity?.message}
          placeholder="title"
          {...register("titleActivity")}
        />
        <button type="submit">Add Activity</button>
      </form>
      {groupActivity.map((item, index) => (
        <>
          <Card key={index}>
            <p>{item.title}</p>
            <p>
              {moment(item.realization_time).subtract(10, "days").calendar()}
            </p>
            <p>{moment(item.realization_time).format("LT")}</p>
            <AiOutlineCloseCircle onClick={() => deleteActivity(item.id)} />
            <button
              onClick={() => {
                setIsShow(true);
              }}
            >
              Edit Activity
            </button>
            {isShow && <InputEditActivity setIsShow={setIsShow} id={item.id} />}
          </Card>
        </>
      ))}
    </>
  );
};

export default ActivityForm;
