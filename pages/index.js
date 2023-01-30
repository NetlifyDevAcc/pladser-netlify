import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
const d = new Date()
const array = ["Vlademar","Gustav","Leonard","Lukas","Frederik","Oscar","August","Hugo","Kristian","Adam","Emil","Victor","Linus","Ida","Augusta","Alberte","Liva","Siri","Lucca","Kamma","Linnea"]
function giveNumber(){
  let text = document.getElementById("Name").value;
  document.getElementById("Number").textContent = text;
  console.log(text);
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
        <button onclick="giveNumber()" id="knap">Find Plads</button>
        <label type="text" id="Number">Plads Nummer</label>
      </main>

      <Footer />
    </div>
  )
}
