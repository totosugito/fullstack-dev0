import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "~/components/view/auth/register-form";

export const Route = createFileRoute("/auth/signup")({
  component: SignUp,
});

function SignUp() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <RegisterForm />
    </div>
  );
}