"use client";

import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <Typography variant="h1">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </Typography>
      <Typography variant="h3">
        Jotion is the connected workspace where <br /> better, faster work
        happens.
      </Typography>
      <Button>
        Enter Jotion
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
