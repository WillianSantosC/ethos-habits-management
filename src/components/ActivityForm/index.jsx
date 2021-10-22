import * as yup from "yup";
import { useContext, useEffect } from "react";
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
import { FiMapPin } from "react-icons/fi";
import Button from "../../components/Button";
import {
  Card,
  CardText,
  CardTitle,
  DataComponent,
  PinComponent,
  SideComponent,
} from "../HabitsCard/style";
import { ActivityContainer, Container } from "./style";
import toast from "react-hot-toast";
import InputActivity from "../InputActivity";
import { List, Title } from "../../pages/Groups/style";

const ActivityForm = () => {
  const { id } = useParams();
  const { groupActivity, getGroupActivity, deleteActivity } =
    useContext(ActivityContext);
  const { token } = useContext(AccessContext);

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
    const newTime = time.split(":");
    const hour = Number(newTime[0]) + 3;
    const data = {
      title: titleActivity,
      realization_time: `${date}T${hour + ":" + newTime[1]}:00Z`,
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
    <ActivityContainer>
      <Container>
        <form onSubmit={handleSubmit(onSubmitActivity)} className="formInputs">
          <Title>Adicione uma atividade</Title>

          <TextField
            size="small"
            margin="none"
            type="text"
            fullWidth
            variant="filled"
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
            variant="filled"
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
            variant="filled"
            error={!!errors.date}
            helperText={errors.date?.message}
            placeholder="Título"
            {...register("date")}
          />
          <Button type="submit">Adicionar </Button>
        </form>
      </Container>
      <Title>Atividades</Title>

      <List>
        {groupActivity.map((item, index) => (
          <Card key={index}>
            <SideComponent>
              <InputActivity item={item} />
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
      </List>
    </ActivityContainer>
  );
};

export default ActivityForm;
