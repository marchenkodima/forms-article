import { useContainerDetailsForm } from "./useContainerDetailsForm";

export const ContainerDetailsForm = () => {
  const containerDetailsForm = useContainerDetailsForm({
    initialValues: {
      containerName: ''
    },
  });

  return (
    <fieldset>
      <input {...containerDetailsForm.register("containerName")} />
    </fieldset>
  );
};