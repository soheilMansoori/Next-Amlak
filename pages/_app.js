import BestSeller from "@/components/modules/BestSeller/BestSeller";
import Footer from "@/components/modules/Footer/Footer";
import Header from "@/components/modules/Header/Header";
import Sidebar from "@/components/modules/Sidebar/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <div className="container">

      <Sidebar />
      <Header />
      <BestSeller />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}