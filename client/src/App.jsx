import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { AgentChat } from "./agent/AgentChat";

function App() {
  return (
    <main className="bg-black text-white font-sans">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <AgentChat />
    </main>
  );
}

export default App;
