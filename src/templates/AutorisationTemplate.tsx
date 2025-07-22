import { Outlet } from "react-router";

export default function AutorisationTemplate() {
  return (
    <div className="bg-neutral-900 font-inter w-full min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}
