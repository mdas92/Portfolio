import { Switch, Route } from "wouter";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Switch>
          <Route path="/" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/work/:slug" component={ProjectDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}
