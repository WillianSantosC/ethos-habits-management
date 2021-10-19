import { useContext } from "react";
import { useParams } from "react-router";
import { GoalsContext } from "../../providers/Goal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AccessContext } from "../../providers/Access";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import { Card } from "./style";
import api from "../../services/api";

function SubGroupTasks() {
  const { id } = useParams();
  const { groupGoals, getGroupGoals, deleteGoal } = useContext(GoalsContext);
  const { token } = useContext(AccessContext);

  const schema = yup.object().shape({
    title: yup.string().required("Required username"),
    difficulty: yup.string().required("Required password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  getGroupGoals(id);

  function onSubmit({ title, difficulty }) {
    const data = { title, difficulty, how_much_achieved: 0, group: id };

    api
      .post("/goals/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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

        <button type="submit">Add</button>
      </form>
      {groupGoals.map((item, index) => (
        <>
          <Card key={index}>
            <p>{item.title}</p>
            <p>{item.difficulty}</p>
            <p>{item.how_much_achieved}</p>
            <AiOutlineCloseCircle onClick={() => deleteGoal(item.id)} />
          </Card>
        </>
      ))}
    </>
  );
}

export default SubGroupTasks;
