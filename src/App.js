import { Helmet } from "react-helmet";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./requests";

function App() {
   return (
      <div className="App">
         <Helmet>
            <meta charSet="utf-8" />
            <title>Netflix?</title>
            <meta
               http-equiv="Content-Security-Policy"
               content="upgrade-insecure-requests"
            />
         </Helmet>
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
