import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useContext } from "react";
import { AccessContext } from "../../providers/Access";
function Login() {
  const { addToLocalStorage } = useContext(AccessContext);

  const schema = yup.object().shape({
    username: yup.string().required("Required username"),
    password: yup.string().required("Required password"),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const handleNewUser = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        console.log(response.data);
        const { access } = response.data;
        console.log(access);
        addToLocalStorage(access);
      })
      .catch((err) => {
        console.log(err);
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleNewUser)} className="formInputs">
        <h1>Login</h1>

        <input type="text" placeholder="Username" {...register("username")} />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
