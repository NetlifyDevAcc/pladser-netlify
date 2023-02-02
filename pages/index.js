import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
const d = new Date()
alert("handicap");
const array = ["Valdemar","Gustav","Leonard","Lukas","Frederik","Oscar","August","Hugo","Kristian","Adam","Emil","Victor","Linus","Ida","Augusta","Alberte","Liva","Siri","Lucca","Kamma","Linnea"]
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
        <button id="knap">Find Plads</button>
        <label type="text" id="Number">Plads Nummer</label>
        <label type="text" >Version 1.0</label>
      </main>

      <Footer />
    </div>
  )
}
