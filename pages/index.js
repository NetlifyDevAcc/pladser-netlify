import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
const d = new Date()
function giveNumber(){
  let text = document.getElementById("Name").textContent;
  console.log(text)
}
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Plads finder!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Find din plads!" />
        <p className="description">
          Skriv dit navn og tryk på knappen!
        </p>
         <input type="text" id="Name" name="Name">Navn</input>
        <button onclick="giveNumber()" className="button">
          Find Plads
        </button>
      </main>

      <Footer />
    </div>
  )
}
