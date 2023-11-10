import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export function AvatarLogo({ src, alt, className = "h-12 w-12" }: Props) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>SB</AvatarFallback>
    </Avatar>
  );
}
