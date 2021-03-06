import { useContext, useEffect } from "react";
import { HabitsContext } from "../../providers/Habits";
import { AccessContext } from "../../providers/Access";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import Button from "../../components/Button";
import api from "../../services/api";
import HabitsCard from "../../components/HabitsCard";
import { Form, HabitsContainer, PageContainer } from "./style";
import { List, Title } from "../Groups/style";
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
        <h1>Hábitos</h1>
        <Form>
          <Title>Adicione um novo hábito</Title>
          <form onSubmit={handleSubmit(handleData)}>
            <TextField
              size="small"
              margin="none"
              label="Título"
              placeholder="Título"
              variant="filled"
              error={!!errors.title}
              helperText={errors.title?.message}
              {...register("title")}
            />

            <TextField
              size="small"
              label="Categoria"
              placeholder="Categoria"
              variant="filled"
              margin="none"
              error={!!errors.category}
              helperText={errors.category?.message}
              {...register("category")}
            />

            <TextField
              size="small"
              label="Dificuldade"
              placeholder="Dificuldade"
              variant="filled"
              margin="none"
              error={!!errors.difficulty}
              helperText={errors.difficulty?.message}
              {...register("difficulty")}
            />

            <TextField
              size="small"
              label="Frequência"
              placeholder="Frequência"
              variant="filled"
              margin="none"
              error={!!errors.frequency}
              helperText={errors.frequency?.message}
              {...register("frequency")}
            />
            <Button type="submit">Adicionar</Button>
          </form>
        </Form>

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
