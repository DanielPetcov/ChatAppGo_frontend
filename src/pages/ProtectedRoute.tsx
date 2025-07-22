import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { AuthState } from "@/stateManager";

export default function ProtectedRoute() {
  const { token, setToken } = AuthState();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/token`, {
      method: "POST",
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data["message"] != "ok") {
          setToken(null);
          navigate("/login", { replace: true });
        }
      });
  }, [token]);

  return <Outlet />;
}
