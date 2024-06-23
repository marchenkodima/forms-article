import { Form } from "@/utils/useForm";

import { ContainerDetailsInitialValues } from "./types";

type Props = {
  form: Form<ContainerDetailsInitialValues>;
}

export const ContainerDetailsForm = ({ form }: Props) => {
  return (
    <fieldset>
      <input {...form.register("containerName")} />
    </fieldset>
  );
};