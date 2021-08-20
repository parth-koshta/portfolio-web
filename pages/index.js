import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";

const App = () => {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#F5F3FF" }}
    >
      <Head>
        <title>Parth N Koshta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Home />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
