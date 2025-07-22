import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import type { RegisterInputs } from "@/schemas/RegisterSchema";
import RegisterOnSubmit from "@/formHandlers/RegisterHandler";

import { AuthState } from "@/stateManager";

export default function RegisterPage() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const { setToken } = AuthState();

  return (
    <div className="bg-neutral-100 p-5 rounded-lg flex flex-col gap-5 xl:min-w-[350px]">
      <h1 className="text-center text-2xl font-bitcount font-bold">Register</h1>
      <form
        onSubmit={handleSubmit(RegisterOnSubmit(navigate, setToken))}
        className="flex flex-col gap-4"
      >
        <div>
          <Input
            {...register("username", { required: "required" })}
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
            {...register("password", { required: "required" })}
            type="password"
            placeholder="password"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        <div>
          <Input
            {...register("repeatedPassword", {
              required: "required",
              validate: (value) => {
                if (value != watch("password")) {
                  return "Password doesn't match";
                }
              },
            })}
            type="password"
            placeholder="repeat password"
          />
          {errors.repeatedPassword && (
            <span className="text-red-500 text-xs">
              {errors.repeatedPassword.message}
            </span>
          )}
        </div>
        <Button>Submit</Button>
      </form>
      <div className="text-xs flex flex-col items-center">
        <div>Have already an account?</div>
        <Button
          variant={"link"}
          className="text-xs cursor-pointer text-blue-400 hover:text-blue-700"
          onClick={() => navigate("/login")}
        >
          Visit Login page
        </Button>
      </div>
    </div>
  );
}
