import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-hot-toast";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const formSchema = yup.object().shape({
    username: yup.string().required("Nome obrigatório"),

    email: yup.string().required("E-mail obrigatório").email("Email inválido"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),

    confirmPassword: yup
      .string()
      .required("Confirmação da senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas devem ser idênticas"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  function handleData({ password, email, username }) {
    const data = { password, email, username };
    api
      .post("/users/", data)
      .then((res) => {
        console.log(res);
        toast.success("Sucesso ao criar a conta");
        return history.push("/");
      })
      .catch((err) => toast.error("Erro ao criar a conta, tente outro email"));
    console.log(data);
  }

  return (
    <div className="container">
      <Container maxWidth="xs">
        <Grid container>
          <Grid className="grid">
            <h1>Register</h1>
            <form onSubmit={handleSubmit(handleData)}>
              <TextField
                size="small"
                margin="none"
                label="Nome"
                placeholder="Digite seu nome"
                variant="outlined"
                error={!!errors.username}
                helperText={errors.username?.message}
                {...register("username")}
              />

              <TextField
                size="small"
                label="E-mail"
                placeholder="Digite seu email"
                variant="outlined"
                margin="none"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email")}
              />

              <TextField
                size="small"
                type={showPassword ? "text" : "password"}
                label="Senha"
                placeholder="Digite sua senha"
                variant="outlined"
                margin="none"
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                size="small"
                type={confirmPassword ? "text" : "password"}
                label="Confirme a sua senha"
                placeholder="Confirme a sua senha"
                variant="outlined"
                margin="none"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                {...register("confirmPassword")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        onClick={() => setConfirmPassword(!confirmPassword)}
                      >
                        {confirmPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
}

export default Register;
