import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../ui/form";
import { SelectRadioItemsType } from "../types/selct-radio-items-types";

interface Props {
  name: string;
  form: any;
  title: string;
  radioGroupItems: SelectRadioItemsType[];
}

const RadioInput = ({ name, form, title, radioGroupItems }: Props) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3 ">
          <FormLabel> {title} </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className=" grid grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-start sm:gap-5"
            >
              {radioGroupItems.map((item) => (
                <FormItem
                  key={item.value}
                  className="flex items-center space-x-2 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={item.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RadioInput;
