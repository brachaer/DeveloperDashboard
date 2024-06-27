import { createSignal, onMount } from "solid-js";
import styles from "./App.module.css";
import Quote from "./components/Quote.jsx";
import Mascot from "./components/Mascot.jsx";
import ProgrammingTip from "./components/ProgrammingTip.jsx";
import Tasks from "./components/Tasks";

function App() {
  const [quote, setQuote] = createSignal("");
  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
  };

  onMount(() => {
    fetchQuote();
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Developer Motivation Dashboard</h1>
        <Quote text={quote()}></Quote>
        <button onClick={fetchQuote} class={styles.fetchButton}>
          Get New Quote
        </button>
      </header>
      <br />
      <Mascot />
      <ProgrammingTip />
      <Mascot />
      <Tasks />
    </div>
  );
}

export default App;
