import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
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
import Button from "../../components/Button";

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
import { Container } from "./style";
import toast from "react-hot-toast";

const ActivityForm = () => {
  const { id } = useParams();
  const { groupActivity, getGroupActivity, deleteActivity } =
    useContext(ActivityContext);
  const { token } = useContext(AccessContext);
  const [calendar, setCalendar] = useState(new Date());

  const [isShow, setIsShow] = useState(false);

  const schema = yup.object().shape({
    titleActivity: yup.string().required("Campo Obrigatório"),
    date: yup.string().required("Campo Obrigatório"),
    time: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    getGroupActivity(id);
  }, [groupActivity]);

  function onSubmitActivity({ titleActivity, date, time }) {
    const data = {
      title: titleActivity,
      realization_time: `${date}T${time}:00Z`,
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
      <Container>
        <form onSubmit={handleSubmit(onSubmitActivity)} className="formInputs">
          <h2>Adicione uma atividade</h2>

          <TextField
            size="small"
            margin="none"
            type="text"
            fullWidth
            variant="outlined"
            error={!!errors.titleActivity}
            helperText={errors.titleActivity?.message}
            placeholder="Título"
            {...register("titleActivity")}
          />

          <TextField
            size="small"
            margin="none"
            type="time"
            fullWidth
            variant="outlined"
            error={!!errors.time}
            helperText={errors.time?.message}
            placeholder="Título"
            {...register("time")}
          />

          <TextField
            size="small"
            margin="none"
            type="date"
            fullWidth
            variant="outlined"
            error={!!errors.date}
            helperText={errors.date?.message}
            placeholder="Título"
            {...register("date")}
          />
          {/* <DateTimePicker
            value={calendar}
            onChange={(val) => setCalendar(val)}
            format="d-M-y h:mm a"
            required
            disableClock
            id="date"
          /> */}
          <Button type="submit">Adicionar </Button>
        </form>
      </Container>
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
