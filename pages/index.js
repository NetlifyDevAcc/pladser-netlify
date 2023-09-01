import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
var seed = 10
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
  var dayOfYear = ((today - onejan + 86400000)/86400000);
  return Math.ceil(dayOfYear/7)
};
function giveNumber() {
    
  var date = new Date();
  seed = date.getWeek()/100/date.getMonth()*date.getYear();
  let array = ["Valdemar","Alexander","Gustav","Leonard","Lukas", "Gilbert", "Frederik","Oscar","August","Hugo","Adam","Emil","Victor","Linus","Ida","Augusta","Liva","Siri","Lucca","Kamma","Linnea","Agnes"];
  var shuffledArray = array.sort((a, b) => 0.5 - random());
  let text = document.getElementById("Name").value;
  document.getElementById("Number").textContent = shuffledArray.indexOf(text)+1;
  console.log(text);
  console.log(seed);
  seed = date.getWeek()/100/date.getMonth()*date.getYear();
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
