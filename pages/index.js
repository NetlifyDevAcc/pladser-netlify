
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
const d = new Date()
const array = ["Vlademar","Gustav","Leonard","Lukas","Frederik","Oscar","August","Hugo","Kristian","Adam","Emil","Victor","Linus","Ida","Augusta","Alberte","Liva","Siri","Lucca","Kamma","Linnea"]

export default function Home() {
  const [number, setNumber] = useState("");

  const giveNumber = () => {
    const name = document.getElementById("Name").value;
    const index = array.indexOf(name);
    setNumber(index >= 0 ? index + 1 : "Navn ikke fundet");
  }

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
        <button onClick={giveNumber}>
          Find Plads
        </button>
        <label type="text" id="Number" name="Number">{number}</label>
      </main>

      <Footer />
    </div>
  )
}
