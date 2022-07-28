import DisplayToaster from '../components/common/toaster/toaster'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <DisplayToaster />
  </>

}


export default MyApp 
