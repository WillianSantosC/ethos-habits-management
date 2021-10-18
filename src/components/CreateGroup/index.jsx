import { Grid, TextField, Button, Container } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";

const CreateGroup = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
  });

  const token = useState(
    JSON.parse(localStorage.getItem("@ethos:access")) || ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function handleData({ name, category, description }) {
    const data = {
      name,
      category,
      description,
    };
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(data);
        console.log(err);
      });
  }

  return (
    <div>
      <Container maxWidth="xs">
        <Grid container>
          <Grid className="grid">
            <h1>Register</h1>
            <form onSubmit={handleSubmit(handleData)}>
              <TextField
                size="small"
                margin="none"
                label="name"
                placeholder="name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register("name")}
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
                label="description"
                placeholder="description"
                variant="outlined"
                margin="none"
                error={!!errors.description}
                helperText={errors.description?.message}
                {...register("description")}
              />
              <Button color="primary" variant="contained" type="submit">
                Enviar
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CreateGroup;
