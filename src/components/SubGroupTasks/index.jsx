import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { GoalsContext } from "../../providers/Goal";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { AccessContext } from "../../providers/Access";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import Button from "../../components/Button";
import api from "../../services/api";
import ActivityForm from "../ActivityForm";
import { Card, CardText, CardTitle, SideComponent } from "../HabitsCard/style";
import { Container } from "./style";
import toast from "react-hot-toast";

function SubGroupTasks() {
  const { id } = useParams();
  const { groupGoals, getGroupGoals, deleteGoal } = useContext(GoalsContext);
  const { token } = useContext(AccessContext);

  const schema = yup.object().shape({
    title: yup.string().required("Required Field"),
    difficulty: yup.string().required("Required Field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    getGroupGoals(id);
  }, [groupGoals]);

  function onSubmit({ title, difficulty }) {
    const data = { title, difficulty, how_much_achieved: 0, group: id };

    api
      .post("/goals/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Grupo criado");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao criar");
      });
  }
  function handleEditGoal(id, boolean) {
    const jsonToApi = {
      achieved: !boolean,
    };

    api
      .patch(`/goals/${id}/`, jsonToApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Objetivo editado");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao editar");
      });
  }

  return (
    <>
      <h1>Atividades e objetivos</h1>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="formInputs">
          <h1>Adicione um Objetivo</h1>

          <TextField
            size="small"
            label="Título"
            margin="none"
            fullWidth
            type="text"
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title?.message}
            placeholder="Título"
            {...register("title")}
          />

          <TextField
            label="Dificuldade"
            placeholder="Dificuldade"
            size="small"
            type="text"
            fullWidth
            variant="outlined"
            margin="none"
            error={!!errors.difficulty}
            helperText={errors.difficulty?.message}
            {...register("difficulty")}
          />

          <Button type="submit">Adicionar</Button>
        </form>
      </Container>
      {groupGoals.map((item, index) => (
        <Card key={index}>
          <SideComponent>
            <AiOutlineCheckCircle
              onClick={() => handleEditGoal(item.id, item.achieved)}
            ></AiOutlineCheckCircle>
            <CardTitle>{item.title}</CardTitle>
            <AiOutlineCloseCircle onClick={() => deleteGoal(item.id)} />
          </SideComponent>

          <CardText>{item.difficulty}</CardText>

          <CardTitle>{item.achieved ? "Completo" : "Incompleto"}</CardTitle>
        </Card>
      ))}
      <ActivityForm></ActivityForm>
    </>
  );
}

export default SubGroupTasks;
