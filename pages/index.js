import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
const d = new Date()
function giveNumber(){
  let text = document.getElementById("Name").value;
  document.getElementById("Number").textContent = text;
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
         <input type="text" id="Name" name="Name"></input>
        <button onclick="giveNumber()" className="button">
          Find Plads
        </button>
        <label type="text" id="Number" name="Name">Navn</label>
      </main>

      <Footer />
    </div>
  )
}
