import type { LoginInputs } from "@/schemas/LoginSchema";
import type { SubmitHandler } from "react-hook-form";
import type { NavigateFunction } from "react-router";

const LoginOnSubmit =
  (
    navigate: NavigateFunction,
    setToken: (token: string) => void,
    setUserID: (userID: string) => void,
    setUserName: (name: string) => void
  ): SubmitHandler<LoginInputs> =>
  (data) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/login`, {
      method: "POST",
      body: JSON.stringify(data),
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

export default LoginOnSubmit;
