import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  variant?:
    | "secondary"
    | "outline"
    | "default"
    | "destructive"
    | null
    | undefined;
}

export function HeroBadge({ title, variant = "secondary" }: Props) {
  return <Badge variant={variant}>{title}</Badge>;
}
