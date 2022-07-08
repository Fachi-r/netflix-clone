import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./requests";

function App() {
   document.title = "Netflix?";
   return (
      <div className="App">
         <head>
            <title>Netlix?</title>
         </head>
         <Nav />
         <Banner />
         <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
         />
         <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
         <h2 className="section-title">Movies By Genre</h2>
         <Row subtitle title="Action" fetchUrl={requests.fetchActionMovies} />
         <Row subtitle title="Comedy" fetchUrl={requests.fetchComedyMovies} />
         <Row subtitle title="Horror" fetchUrl={requests.fetchHorrorMovies} />
         <Row subtitle title="Romance" fetchUrl={requests.fetchRomanceMovies} />
         <Row
            subtitle
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
         />
         <Footer />
      </div>
   );
}

export default App;
