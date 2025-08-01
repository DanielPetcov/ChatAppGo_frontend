import type { RegisterInputs } from "@/schemas/RegisterSchema";
import type { SubmitHandler } from "react-hook-form";
import type { NavigateFunction } from "react-router";

const RegisterOnSubmit =
  (
    navigate: NavigateFunction,
    setToken: (token: string) => void,
    setUserID: (userID: string) => void,
    setUserName: (name: string) => void
  ): SubmitHandler<RegisterInputs> =>
  (data) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/register`, {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data["message"] == "success") {
          setToken(data["jwt"]);
          setUserID(data["userID"]);
          setUserName(data["userName"]);
          navigate("/", { replace: true });
        }
      });
  };

export default RegisterOnSubmit;
