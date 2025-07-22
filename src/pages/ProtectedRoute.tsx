import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useStore } from "@/stateManager";

export default function ProtectedRoute() {
  const { logged } = useStore();
  let navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login", { replace: true });
    }
  }, [logged]);

  return <Outlet />;
}
