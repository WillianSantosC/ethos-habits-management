import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useContext, useState } from "react";
import { AccessContext } from "../../providers/Access";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { toast } from "react-hot-toast";
import { UserContext } from "../../providers/User";

function Login() {
  const { addToLocalStorage, token } = useContext(AccessContext);
  const { addUsernameToLocal } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Required username"),
    password: yup.string().required("Required password"),
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
        toast.success("Login succesfully");
        addToLocalStorage(access);
        addUsernameToLocal(data.username);
        return history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login unsuccessfully");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleNewUser)} className="formInputs">
        <h1>Login</h1>

        <TextField
          size="small"
          margin="none"
          type="text"
          variant="outlined"
          error={!!errors.username}
          helperText={errors.username?.message}
          placeholder="Username"
          {...register("username")}
        />

        <TextField
          placeholder="Password"
          size="small"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          margin="none"
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...register("password")}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
