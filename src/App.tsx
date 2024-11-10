import { BrowserRouter as Router } from "react-router-dom";
import { Home, About, Experience, Projects, Contact } from "./pages";
import Layout from "./components/Layout";

const App = () => (
  <Router>
    <Layout>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  </Router>
);

export default App;
