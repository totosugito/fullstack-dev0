import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "~/components/view/auth/login-form";

export const Route = createFileRoute("/auth/signin")({
  component: SignIn,
});

function SignIn() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
}