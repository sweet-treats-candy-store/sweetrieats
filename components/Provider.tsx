"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

interface Session {
  expires: string;
  children: Element[];
}

interface ProviderProps {
  children: React.ReactNode;
  session: Session;
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
