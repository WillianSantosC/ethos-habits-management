import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { GoalsContext } from "../../providers/Goal";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { AccessContext } from "../../providers/Access";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import Button from "../../components/Button";
import api from "../../services/api";
import ActivityForm from "../ActivityForm";
import { Card, CardText, CardTitle, SideComponent } from "../HabitsCard/style";
import { ButtonComponent, Container, GoalsContainer } from "./style";
import toast from "react-hot-toast";
import { List, Title } from "../../pages/Groups/style";
import Menu from "../../components/Menu";
import { Link } from "react-router-dom";

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
    <GoalsContainer>
      <ButtonComponent>
        <Link to="/groups">Voltar para Grupos</Link>
      </ButtonComponent>
      <Title>Atividades e objetivos</Title>

      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="formInputs">
          <Title>Adicione um Objetivo</Title>

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
      <Title>Meus Objetivos</Title>
      <List>
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
      </List>

      <ActivityForm />
    </GoalsContainer>
  );
}

export default SubGroupTasks;
