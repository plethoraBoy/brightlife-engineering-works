import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Security, connectivity, automation, safety and engineering — five coordinated disciplines specified, installed and maintained as one environment.",
};

export default function ServicesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
