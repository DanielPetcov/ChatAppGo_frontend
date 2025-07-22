import type { RegisterInputs } from "@/schemas/RegisterSchema";
import type { SubmitHandler } from "react-hook-form";
import type { NavigateFunction } from "react-router";

const RegisterOnSubmit =
  (
    navigate: NavigateFunction,
    setToken: (token: string) => void
  ): SubmitHandler<RegisterInputs> =>
  (data) => {
    fetch(`http://localhost:8080/v1/register`, {
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
          navigate("/", { replace: true });
        }
      });
  };

export default RegisterOnSubmit;
