import type { LoginInputs } from "@/schemas/LoginSchema";
import type { SubmitHandler } from "react-hook-form";
import type { NavigateFunction } from "react-router";

const LoginOnSubmit =
  (
    navigate: NavigateFunction,
    setToken: (token: string) => void
  ): SubmitHandler<LoginInputs> =>
  (data) => {
    fetch(`http://localhost:8080/v1/login`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data["message"] == "success") {
          setToken(data["jwt"]);
          navigate("/", { replace: true });
        }
      });
  };

export default LoginOnSubmit;
