import { Switch, Route, Router as WouterRouter } from "wouter";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { RisoBackground } from "./components/RisoBackground";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import ContentMaps from "./pages/ContentMaps";
import ProductTaxonomy from "./pages/ProductTaxonomy";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={About} />
      <Route path="/journey" component={Journey} />
      <Route path="/work" component={Work} />
      <Route path="/work/content-maps" component={ContentMaps} />
      <Route path="/work/product-taxonomy" component={ProductTaxonomy} />
      <Route path="/work/:slug" component={ProjectDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground relative">
      <RisoBackground />
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <div className="relative z-10 flex-1 flex flex-col w-full">
          <Navbar />
          <main className="flex-1 flex flex-col w-full">
            <Router />
          </main>
          <Footer />
        </div>
      </WouterRouter>
    </div>
  );
}

export default App;
