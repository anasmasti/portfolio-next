import PropTypes from "prop-types";
import Script from "next/script";
import "../styles/globals.scss";
import Copyright from "../components/shared/Copyright";

export const metadata = {
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
    "React",
    "NextJs",
    "VueJs",
    "Javascript",
    "Java",
    "Php",
    "Laravel",
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

export default function RootLayout({ children }) {
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

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
