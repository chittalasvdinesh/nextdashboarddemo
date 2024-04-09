import Head from 'next/head';
import Footer from '../../../components/Footer';
import styles from '../../styles/about.module.css'
 const About = () => {
  return (
    <>
    <Head>
      <title>About page routing</title>
      <meta name="description" content='About description'/>
    </Head>
    <div className={styles.main_container}>
      <h2>About</h2>
      Lorepicsum
    </div>
    </>
  )
};

export default About;

// About.getLayout=function PageLayout(page){
//   return <>
//   {page}
//   <Footer/>
//   </>
// }
