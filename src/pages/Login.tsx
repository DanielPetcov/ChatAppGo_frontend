import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import type { LoginInputs } from "@/schemas/LoginSchema";
import LoginOnSubmit from "@/formHandlers/LoginHandler";

export default function LoginPage() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  return (
    <div className="bg-neutral-100 p-5 rounded-lg flex flex-col gap-5 xl:min-w-[350px]">
      <h1 className="text-center text-2xl font-bitcount font-bold">LOGIN</h1>
      <form
        onSubmit={handleSubmit(LoginOnSubmit)}
        className="flex flex-col gap-4"
      >
        <div>
          <Input
            {...register("username", { required: "this is required" })}
            type="text"
            placeholder="username"
          />
          {errors.username && (
            <span className="text-red-500 text-xs">
              {errors.username.message}
            </span>
          )}
        </div>
        <div>
          <Input
            {...register("password", { required: "this is required" })}
            type="password"
            placeholder="password"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        <Button>Submit</Button>
      </form>
      <div className="flex flex-col items-center text-xs">
        <div>Dont't have an account?</div>
        <Button
          variant={"link"}
          className="text-xs cursor-pointer text-blue-400 hover:text-blue-700"
          onClick={() => navigate("/register")}
        >
          Visit Register page
        </Button>
      </div>
    </div>
  );
}
