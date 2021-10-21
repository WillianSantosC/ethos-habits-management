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
import { AiOutlineCloseCircle, AiOutlineClockCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { FiMapPin } from "react-icons/fi";

import InputEditActivity from "../InputEditActivity";
import DateTimePicker from "react-datetime-picker";
import {
  Card,
  CardText,
  CardTitle,
  DataComponent,
  PinComponent,
  SideComponent,
} from "../HabitsCard/style";
import toast from "react-hot-toast";

const ActivityForm = () => {
  const { id } = useParams();
  const { groupActivity, getGroupActivity, deleteActivity } =
    useContext(ActivityContext);
  const { token } = useContext(AccessContext);
  const [calendar, setCalendar] = useState(new Date());

  const [isShow, setIsShow] = useState(false);

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
      realization_time: calendar,
      group: id,
    };
    api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Atividade criada");
      })
      .catch((err) => {
        toast.error("Falha ao criar");
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
        <DateTimePicker
          value={calendar}
          onChange={(val) => setCalendar(val)}
          format="d-M-y h:mm a"
          required
          disableClock
        />
        <button type="submit">Add Activity</button>
      </form>
      {groupActivity.map((item, index) => (
        <Card key={index}>
          <SideComponent>
            <TiEdit
              onClick={() => {
                setIsShow(true);
              }}
            >
              Edit Activity
            </TiEdit>
            {isShow && <InputEditActivity setIsShow={setIsShow} id={item.id} />}
            <CardTitle>{item.title}</CardTitle>
            <AiOutlineCloseCircle onClick={() => deleteActivity(item.id)} />
          </SideComponent>
          <DataComponent>
            <PinComponent>
              <FiMapPin id={"PinIcon"} />
              <CardText>{moment(item.realization_time).calendar()}</CardText>
            </PinComponent>
            <PinComponent>
              <AiOutlineClockCircle id={"PinIcon"} />
              <CardText>
                {moment(item.realization_time).format("LT")}hr
              </CardText>
            </PinComponent>
          </DataComponent>
        </Card>
      ))}
    </>
  );
};

export default ActivityForm;
