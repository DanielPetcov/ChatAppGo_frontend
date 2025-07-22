import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { AuthState } from "@/stateManager";

export default function ProtectedRoute() {
  const { token, setToken } = AuthState();
  let navigate = useNavigate();

  useEffect(() => {
    console.log(token);

    fetch(`http://localhost:8080/v1/token`, {
      method: "POST",
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        if (data["message"] != "ok") {
          setToken(null);
          navigate("/login", { replace: true });
        }
      });
  }, [token]);

  return <Outlet />;
}
