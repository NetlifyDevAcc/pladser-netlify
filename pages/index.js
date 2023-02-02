import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
let array = ["Valdemar","Gustav","Leonard","Lukas","Frederik","Oscar","August","Hugo","Kristian","Adam","Emil","Victor","Linus","Ida","Augusta","Alberte","Liva","Siri","Lucca","Kamma","Linnea"]
var seed = 1
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
function giveNumber() {
  var date = new Date()
  var seed = date.getDate();
  var shuffledArray = array.sort((a, b) => 0.5 - random())
  let text = document.getElementById("Name").value;
  document.getElementById("Number").textContent = shuffledArray.findIndex(text);
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
        <input type="text" id="Name"></input> 
        <button onClick={() => giveNumber()}>Find Plads!</button>
        <label type="text" id="Number">Plads Nummer!</label>
        
      </main>

      <Footer />
    </div>
  );
}
