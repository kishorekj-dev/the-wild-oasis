import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: (user) => {
      toast.success(
        "Signup successful! Please check your email to verify your account."
      );
    },
    onError: (error) => {
      console.error("Signup failed:", error);
      toast.error("Signup failed. Please try again.");
    },
  });

  return { signup, isLoading };
}
