import { Form } from "@/utils/useForm";

import { InfrastructureRequirementsInitialValues } from "./types";

type Props = {
  form: Form<InfrastructureRequirementsInitialValues>;
}

export const InfrastructureRequirementsForm = ({ form }: Props) => {
  return (
    <fieldset>
      <select {...form.register('taskSize.cpu')}>
        <option value=""></option>
        <option value="0.25">0.25</option>
        <option value="0.5">0.5</option>
        <option value="1">1</option>
      </select>
      <select {...form.register('taskSize.memory')}>
        <option value=""></option>
        <option value="512">512</option>
        <option value="1024">1024</option>
        <option value="2048">2048</option>
      </select>
    </fieldset>
  );
};