import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully Updated.");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { updateSetting, isUpdating };
}
