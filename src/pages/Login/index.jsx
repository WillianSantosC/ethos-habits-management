import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useContext, useState } from "react";
import { AccessContext } from "../../providers/Access";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Redirect, useHistory } from "react-router";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { toast } from "react-hot-toast";
import { UserContext } from "../../providers/User";
import { Animation, Container, MainContainer } from "./style";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/Login.json";
import Button from "../../components/Button";
import ImgManagement from "../../assets/img/management (1).png";
import ImgHighFive from "../../assets/img/high-five.png";
import Logo from "../../assets/img/logos/ethos-original.png";
import LogoPink from "../../assets/img/logos/ethos-reddish.png";

function Login() {
  const { addToLocalStorage, authenticated } = useContext(AccessContext);
  const { addUsernameToLocal } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();

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

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNewUser = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        toast.success("Login realizado com sucesso");
        addToLocalStorage(access);
        addUsernameToLocal(data.username);
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha inválidos");
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <MainContainer>
      <div>
        <Container>
          <h2>
            <img src={LogoPink} alt="ethos" />
          </h2>
          <div id="form-container">
            <form onSubmit={handleSubmit(handleNewUser)}>
              <h1>Login</h1>
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
                type={showPassword ? "text" : "password"}
                label="Senha"
                placeholder="Digite sua senha"
                margin="none"
                size="small"
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

              <Button pinkSchema type="submit">
                Entrar
              </Button>

              <div id="label">
                <div></div>
                <p>ou</p>
                <div></div>
              </div>

              <Button onClick={() => history.push("/register")}>
                Cadastre-se
              </Button>
            </form>
          </div>

          <Animation>
            <h1>
              Bem vindo ao <img src={Logo} alt="ethos" />
            </h1>

            <Lottie
              options={defaultOptions}
              height={300}
              width={300}
              speed={0.5}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
            <div id="iconsInfo">
              <div id="boxImg">
                <img src={ImgManagement} alt="management" />
                <p>Controle seus hábitos facilmente</p>
              </div>
              <div id="boxImg">
                <img src={ImgHighFive} alt="highfive" />
                <p>Um lugar para fazer amigos</p>
              </div>
            </div>
          </Animation>
        </Container>
      </div>
    </MainContainer>
  );
}

export default Login;
