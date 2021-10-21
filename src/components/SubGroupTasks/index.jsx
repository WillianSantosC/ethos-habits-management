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
import api from "../../services/api";
import ActivityForm from "../ActivityForm";
import { Card, CardText, CardTitle, SideComponent } from "../HabitsCard/style";
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
      <form onSubmit={handleSubmit(onSubmit)} className="formInputs">
        <h1>Add goal</h1>

        <TextField
          size="small"
          margin="none"
          type="text"
          variant="outlined"
          error={!!errors.title}
          helperText={errors.title?.message}
          placeholder="title"
          {...register("title")}
        />

        <TextField
          placeholder="Difficulty"
          size="small"
          type="text"
          variant="outlined"
          margin="none"
          error={!!errors.difficulty}
          helperText={errors.difficulty?.message}
          {...register("difficulty")}
        />

        <button type="submit">Add Goal</button>
      </form>
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

          <CardTitle>{item.achieved ? "completo" : "incompleto"}</CardTitle>
        </Card>
      ))}
      <ActivityForm></ActivityForm>
    </>
  );
}

export default SubGroupTasks;
