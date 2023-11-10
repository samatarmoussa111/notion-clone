import clsx from "clsx";

interface Props {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "blockquote"
    | "code"
    | "lead"
    | "large"
    | "small"
    | "muted";

  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span" | "code";

  className?: string;
  children: React.ReactNode;
}

const Typography = ({
  variant = "p",
  component: Component = "div",
  children,
  className,
}: Props) => {
  let variantStyles: string = "";

  switch (variant) {
    case "h1":
      variantStyles = ` scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl `;
      break;
    case "p": // Default
      variantStyles = `leading-7 `;
      break;
    case "h2":
      variantStyles = `scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0`;
      break;
    case "h3":
      variantStyles = `scroll-m-20 text-2xl font-semibold tracking-tight`;
      break;
    case "h4":
      variantStyles = `scroll-m-20 text-xl font-semibold tracking-tight`;
      break;
    case "blockquote":
      variantStyles = `mt-6 border-l-2 pl-6 italic`;
      break;
    case "code":
      variantStyles = `relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`;
      break;
    case "lead":
      variantStyles = `text-xl text-muted-foreground`;
      break;
    case "large":
      variantStyles = `text-lg font-semibold`;
      break;
    case "small":
      variantStyles = `text-sm font-medium leading-none`;
      break;
    case "muted":
      variantStyles = `text-sm text-muted-foreground`;
      break;
  }

  return (
    <Component className={clsx(variantStyles, className)}>{children}</Component>
  );
};

export default Typography;
