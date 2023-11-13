"use client";

import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const Documents = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        alt="No documents"
        width={300}
        height={300}
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        alt="No documents"
        width={300}
        height={300}
        className="hidden dark:block"
      />
      <Typography variant="h3" component="h2">
        Welcome to {user?.lastName}&apos;s Jotion
      </Typography>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default Documents;
