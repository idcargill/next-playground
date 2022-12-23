import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FishImage from '../sections/indexPage/FishImage'
import DadJoke from '../sections/indexPage/DadJokeContainer'
import { SomeComponent } from '../sections/indexPage/SomeComponent'
import { RefExample } from '../sections/indexPage/useRef';
import UserInfoContainer from '../sections/indexPage/UserInfoContainer'
import Link from 'next/link'
import ContextDisplay from '../sections/context/ContextDisplay'

// import * as env from 'env-var';

const DAD_JOKE_API_KEY = process.env.DAD_JOKE_API_KEY || 'http://www.google.com';

export async function getServerSideProps() {
  return {
    props: {
      key: DAD_JOKE_API_KEY,
      chicken: 'Eggs'
    }
  }
}

const Title = () => (
  <h1 className={styles.title}>
    Welcome to Ian&apos;s Wacky Playground of Garbage!
  </h1>
)

const Home = (props:any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Testing Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Link href={"/api/auth/login"} style={{ marginRight: '15px'}}>Log In</Link>
        <Link href={"/api/auth/logout"} style={{ marginRight: '15px'}}>Log Out</Link>
        <Link href={"/protectedPage"}>Protected</Link>
      </div>


      <UserInfoContainer />

      <ContextDisplay/>

      <main className={styles.main}>
        <Title />
        <div>
          <FishImage />
        </div>
        <div>
          <DadJoke />
        </div>
        <SomeComponent />
        <RefExample />
      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}



export default Home;



// email : "idcargill@gmail.com"
// email_verified : true
// family_name : "Cargill"
// given_name : "Ian"
// locale : "en"
// name : "Ian Cargill"
// nickname : "idcargill"
// picture : "https://lh3.googleusercontent.com/a/ALm5wu1jc93lfZYxOBjJCL8hrbexiuiZLAOiMxqqsgu2YaU=s96-c"
// sid : "OKfDviqy6AV14mEiNmJA843cBgSsjOmU"
// sub : "google-oauth2|101236962669768531200"
// updated_at : "2022-11-12T02:53:00.694Z"

// email : "idcargill@gmail.com"
// email_verified : true
// family_name : "Cargill"
// given_name : "Ian"
// locale : "en"
// name : "Ian Cargill"
// nickname : "idcargill"
// picture : "https://lh3.googleusercontent.com/a/ALm5wu1jc93lfZYxOBjJCL8hrbexiuiZLAOiMxqqsgu2YaU=s96-c"
// sid : "yWkF41sqVOonpWe--k4Zlvw58YIL4ToC"
// sub : "google-oauth2|101236962669768531200"
// updated_at : "2022-11-12T02:53:36.070Z"