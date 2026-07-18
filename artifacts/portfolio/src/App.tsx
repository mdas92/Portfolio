import { Switch, Route } from "wouter";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import ChatbotCaseStudy from "./pages/ChatbotCaseStudy";
import AampeStrategy from "./pages/AampeStrategy";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Switch>
          <Route path="/" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/work/aampe-strategy" component={AampeStrategy} />
          <Route path="/work/chatbot" component={ChatbotCaseStudy} />
          <Route path="/work/:slug" component={ProjectDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}
