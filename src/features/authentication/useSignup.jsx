import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending: isLoadingSignup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "User created successfully. please confirm your email address."
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, isLoadingSignup };
}
