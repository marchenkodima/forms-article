import { observer } from "mobx-react";

import { FormControl } from "../utils";

type Props = {
  control: FormControl<number>;
};

export const InputNumber = observer(({ control }: Props) => {
  return (
    <input
      value={control.value}
      onChange={(e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
          control.value = value;
        }
      }}
    />
  );
});
