import { TextField } from "@material-ui/core";
import { Container } from "./style";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AccessContext } from "../../providers/Access";
import api from "../../services/api";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Title } from "../../pages/Groups/style";

const CreateGroup = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
  });

  const { token } = useContext(AccessContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function handleData(data) {
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Grupo criado");
      })
      .catch((err) => {
        toast.error("Falha ao criar");
      });
  }

  return (
    <Container>
      <Title>Criar um novo grupo</Title>
      <form onSubmit={handleSubmit(handleData)}>
        <TextField
          size="small"
          margin="none"
          label="Nome"
          placeholder="Nome"
          variant="filled"
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register("name")}
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
          label="Descrição"
          placeholder="Descrição"
          variant="filled"
          margin="none"
          error={!!errors.description}
          helperText={errors.description?.message}
          {...register("description")}
        />
        <Button type="submit">Criar</Button>
      </form>
    </Container>
  );
};

export default CreateGroup;
