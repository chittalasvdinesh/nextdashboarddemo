import "@/styles/globals.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from "next/head";
import { Layout } from "../../components/Layout";

export default function App({ Component, pageProps }) {
  
  // if(Component.getLayout){
  // return Component.getLayout(<Component {...pageProps} />)
  // }

  return <>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
}
