import Head from "next/head";
import Home from "../components/Home";

const App = () => {
  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: "rgba(254, 242, 242, 1);" }}
    >
      <Head>
        <title>Parth N Koshta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400&family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Home />
    </div>
  );
};

export default App;
