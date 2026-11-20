import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Open a channel with WRAPTECH. Reach our Chennai desk by phone, email or enquiry form for security, surveillance, networking, automation and safety systems.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
