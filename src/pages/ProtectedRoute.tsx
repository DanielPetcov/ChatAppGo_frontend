import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { AuthState } from "@/stateManager";

export default function ProtectedRoute() {
  const { token, setToken } = AuthState();
  const [loaded, setLoaded] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (token == null) {
      navigate("/login", { replace: true });
      return;
    }

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
          return;
        }
        setLoaded(true);
      });
  }, [token]);

  if (loaded) {
    return <Outlet />;
  }
}
