import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const [seatNumber, setSeatNumber] = useState('');
  const [name, setName] = useState('');
  const [showNumber, setShowNumber] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = array.indexOf(name);
    if (index !== -1) {
      setSeatNumber(index + 1);
      setShowNumber(true);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="Name" 
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button id="knap" type="submit">Find Plads</button>
        </form>
        {showNumber && (
          <>
            <label type="text" id="Number">Plads Nummer: {seatNumber}</label>
            <label type="text">Version 1.0</label>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
