import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Button from "../../components/Button";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import { Animation, Container, MainContainer } from "./style";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/Security.json";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
    <MainContainer>
      <div>
        <Container>
          <h2>
            ethos<span>_</span>
          </h2>
          <div id="form-container">
            <form onSubmit={handleSubmit(handleData)}>
              <h1>Register</h1>
              <TextField
                margin="none"
                label="Nome"
                fullWidth
                focused
                variant="outlined"
                placeholder="Digite seu nome"
                error={!!errors.username}
                helperText={errors.username?.message}
                {...register("username")}
              />

              <TextField
                label="E-mail"
                fullWidth
                placeholder="Digite seu email"
                margin="none"
                focused
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email")}
              />

              <TextField
                type={showPassword ? "text" : "password"}
                label="Senha"
                placeholder="Digite sua senha"
                margin="none"
                fullWidth
                focused
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
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
                type={confirmPassword ? "text" : "password"}
                label="Confirme a sua senha"
                placeholder="Confirme a sua senha"
                fullWidth
                focused
                variant="outlined"
                margin="none"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                {...register("confirmPassword")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
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
              <Button pinkSchema type="submit">
                Cadastre-se
              </Button>

              <div id="label">
                <div></div>
                <p>OR</p>
                <div></div>
              </div>

              <Button onClick={() => history.push("/")}>Login</Button>
            </form>
          </div>

          <Animation>
            <h1>
              Bem vindo ao ethos
              <span>_</span>
            </h1>

            <h3>
              Uma plataforma para melhorar seus hábitos e organizar o seu estilo
              de vida.
            </h3>
            <Lottie
              options={defaultOptions}
              height={300}
              width={300}
              speed={0.5}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />

            <h4>Mude o seu estilo de vida</h4>
          </Animation>
        </Container>
      </div>
    </MainContainer>
  );
}

export default Register;
