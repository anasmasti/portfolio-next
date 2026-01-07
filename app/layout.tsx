import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.scss";
import Copyright from "../components/shared/Copyright";

export const metadata: Metadata = {
  title: {
    default: "Anas Masti",
    template: "%s | Anas Masti",
  },
  description: "Hey, I'm Anas Masti, I'm a Web developer based in Morocco",
  keywords: [
    "Anas",
    "Masti",
    "Anas Masti",
    "anasmasti",
    "Developpeur web",
    "Developpeur Angular",
    "Developpeur VueJs",
    "Angular",
    "React.js",
    "React",
    "Next.js",
    "NextJs",
    "VueJs",
    "Javascript",
    "Maroc",
    "Morocco",
    "Developer",
    "Full-Stack",
  ],
  authors: [{ name: "Anas Masti" }],
  verification: {
    google: "e7uObb_R2u4MF6JYc14AYBpZSN8ArazQ_YD0iNnm_UY",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Script src="/static/js/three.min.js" strategy="beforeInteractive" />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
