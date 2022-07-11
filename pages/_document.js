import { Html, NextScript, Main, Head } from "next/document";

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Hey, I'm Anas Masti, I'm a Web developer based in Morocco"
        />
        <meta
          name="keywords"
          content="Anas, Masti, Anas Masti, anasmasti,Développeur web, Développeur Angular, Développeur VueJs, Angular, React, NextJs, VueJs, Javascript, Java, Php, Laravel, Maroc, Maroc, Morocco, Développeur, Developer Web Full-Stack"
        />
        <meta name="author" content="Anas Masti" />
        <meta
          name="google-site-verification"
          content="e7uObb_R2u4MF6JYc14AYBpZSN8ArazQ_YD0iNnm_UY"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script src="static/js/three.min.js" defer></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
