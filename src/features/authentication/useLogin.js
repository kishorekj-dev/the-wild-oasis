import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (data) => {
      navigate("/dashboard");
    },
    onError: (err) => {
      console.error("Login failed:", err);
      toast.error("Login failed. Please check your credentials and try again.");
    },
  });
  return { login, isLoading };
}
