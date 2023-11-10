import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormExample } from "../form/form-example";

interface Props {
  children: React.ReactNode;
  dialogTitle: string;
  dialogDescription: string;
}

export function DialogWithForm({
  children,
  dialogTitle,
  dialogDescription,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[400px] sm:max-w-2xl  pt-10 pb-20 sm:pt-10 sm:pb-10">
        <DialogHeader>
          <DialogTitle> {dialogTitle} </DialogTitle>
          <DialogDescription className="max-w-[300px]    sm:max-w-xl">
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        <FormExample />
      </DialogContent>
    </Dialog>
  );
}
