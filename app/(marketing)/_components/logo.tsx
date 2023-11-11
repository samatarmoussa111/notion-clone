import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height={40}
        width={40}
        alt="logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height={40}
        width={40}
        alt="logo"
        className="hidden dark:block"
      />
      <Typography variant="p" className={cn("font-semibold")}>
        Jotion
      </Typography>
    </div>
  );
};

export default Logo;
