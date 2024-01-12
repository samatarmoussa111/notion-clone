"use client";

import { Spinner } from "@/components/spinner/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";
import SearchCommand from "@/components/search-command/search-command";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, isAuthenticated } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className=" h-full flex ">
      <Navigation />
      <main className="flex-1  h-full overflow-y-auto ">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
}
