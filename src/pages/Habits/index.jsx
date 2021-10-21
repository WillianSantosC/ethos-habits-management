import { useContext, useEffect } from "react";
import { HabitsContext } from "../../providers/Habits";
import { AccessContext } from "../../providers/Access";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, TextField, Button, Container } from "@material-ui/core";
import api from "../../services/api";
import HabitsCard from "../../components/HabitsCard";
import { HabitsContainer } from "./style";
import { PageContainer, List, Title } from "../Groups/style";
import Menu from "../../components/Menu";
import toast from "react-hot-toast";

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
      .then((res) => {
        toast.success("Hábito criado");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao criar");
      });
  }
  useEffect(() => {
    getHabits();
  }, [myHabits, getHabits]);

  return (
    <PageContainer>
      <Menu />
      <HabitsContainer>
        <Title>Habits</Title>
        {/* <button onClick={getHabits}>click</button> */}
        <Container maxWidth="xs">
          <Grid container>
            <Grid className="grid">
              <Title>Add a new Habit</Title>
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
                  add
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
        <Title>Meus Hábitos</Title>
        <List>
          {myHabits.map((item) => (
            <HabitsCard habits={item} key={item.id} />
          ))}
        </List>
      </HabitsContainer>
    </PageContainer>
  );
}

export default Habits;
