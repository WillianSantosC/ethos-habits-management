import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Redirect, useHistory } from "react-router";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import { Animation, Container, MainContainer } from "./style";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/Security.json";
import { AccessContext } from "../../providers/Access";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const { authenticated } = useContext(AccessContext);

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

  if (authenticated) {
    return <Redirect to="/dashboard" />;
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
                size="small"
                variant="filled"
                placeholder="Digite seu nome"
                error={!!errors.username}
                helperText={errors.username?.message}
                {...register("username")}
              />

              <TextField
                label="E-mail"
                fullWidth
                size="small"
                placeholder="Digite seu email"
                margin="none"
                variant="filled"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email")}
              />

              <TextField
                type={showPassword ? "text" : "password"}
                label="Senha"
                size="small"
                placeholder="Digite sua senha"
                margin="none"
                fullWidth
                variant="filled"
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
                variant="filled"
                size="small"
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
                <p>ou</p>
                <div></div>
              </div>

              <Button onClick={() => history.push("/")}>Entrar</Button>
            </form>
          </div>

          <Animation>
            <h1>
              Bem vindo ao <span>ethos_</span>
            </h1>

            <p>
              Uma plataforma para melhorar seus hábitos e organizar o seu estilo
              de vida.
            </p>
            <Lottie
              options={defaultOptions}
              height={300}
              width={300}
              speed={0.5}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />

            <p>Seja o protagonista da sua mudança</p>
          </Animation>
        </Container>
      </div>
    </MainContainer>
  );
}

export default Register;
