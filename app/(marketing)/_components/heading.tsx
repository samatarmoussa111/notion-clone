"use client";

import { Spinner } from "@/components/spinner/spinner";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
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
      {isLoading && (
        <div className="w-full flex items-center justify-center ">
          <Spinner size="lg" />
        </div>
      )}
      {!isLoading && !isAuthenticated && (
        <SignInButton mode="modal">
          <Button>
            Get Jotion free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </SignInButton>
      )}
      {!isLoading && isAuthenticated && (
        <Button asChild>
          <Link href="/documents">
            Enter Jotion
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default Heading;
