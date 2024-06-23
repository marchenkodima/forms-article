import { Form } from "@/utils/useForm";
import { TaskDefinitionInitialValues } from "@/steps/04-combine-all-in-one-hook/taskDefinitionForm/types";

type Props = {
  form: Form<TaskDefinitionInitialValues>;
}

export const ContainerDetailsForm = ({ form }: Props) => {
  return (
    <fieldset>
      <input {...form.register("containers.containerDetails.containerName")} />
    </fieldset>
  );
};