import Container from "@/components/container/container";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";

export default function Home() {
  return (
    <Container className="h-screen flex justify-center items-center flex-col gap-10">
      <Typography variant="h1">Notion Clone Geist</Typography>
      <Typography variant="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis
        tenetur debitis! Suscipit delectus libero, vitae harum ipsam, ipsum
        rerum dolores debitis praesentium quos iure tempore minus minima
        expedita amet.
      </Typography>
      <div className="flex items-center justify-center gap-x-5">
        <Button>Se connecter</Button>
        <Button>S&apos;inscrire</Button>
      </div>
      <ModeToggle />
    </Container>
  );
}
