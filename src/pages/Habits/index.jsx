import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { AccessContext } from "../../providers/Access";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, TextField, Button, Container } from "@material-ui/core";
import api from "../../services/api";
import HabitsCard from "../../components/HabitsCard";
import { CardContainer } from "./style";

function Habits() {
  const { getHabits, myHabits } = useContext(HabitsContext);

  const { parse, token } = useContext(AccessContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),

    category: yup.string().required("Campo Obrigatório"),

    difficulty: yup.string().required("Campo Obrigatório"),

    frequency: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function handleData({ title, category, difficulty, frequency }) {
    const data = {
      title,
      category,
      difficulty,
      frequency,
      how_much_achieved: 0,
      user: parse.user_id,
    };

    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  console.log(parse);

  return (
    <div>
      <h1>Habits</h1>
      <button onClick={getHabits}>click</button>
      <Container maxWidth="xs">
        <Grid container>
          <Grid className="grid">
            <h1>Register</h1>
            <form onSubmit={handleSubmit(handleData)}>
              <TextField
                size="small"
                margin="none"
                label="Title"
                placeholder="Title"
                variant="outlined"
                error={!!errors.title}
                helperText={errors.title?.message}
                {...register("title")}
              />

              <TextField
                size="small"
                label="Category"
                placeholder="Category"
                variant="outlined"
                margin="none"
                error={!!errors.category}
                helperText={errors.category?.message}
                {...register("category")}
              />

              <TextField
                size="small"
                label="Difficulty"
                placeholder="Difficulty"
                variant="outlined"
                margin="none"
                error={!!errors.difficulty}
                helperText={errors.difficulty?.message}
                {...register("difficulty")}
              />

              <TextField
                size="small"
                label="Frequency"
                placeholder="Frequency"
                variant="outlined"
                margin="none"
                error={!!errors.frequency}
                helperText={errors.frequency?.message}
                {...register("frequency")}
              />
              <Button color="primary" variant="contained" type="submit">
                Enviar
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <CardContainer>
        {myHabits.map((item) => (
          <HabitsCard habits={item} key={item.id} />
        ))}
      </CardContainer>
    </div>
  );
}

export default Habits;
