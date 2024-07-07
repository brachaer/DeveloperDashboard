import { createSignal, onMount } from "solid-js";
import styles from "./App.module.css";
import Quote from "./components/Quote.jsx";
import Mascot from "./components/Mascot.jsx";
import ProgrammingTip from "./components/ProgrammingTip.jsx";
import Tasks from "./components/Tasks";

function App() {
  const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only way to do great work is to love what you do. - Steve Jobs",
  ];

  const [quote, setQuote] = createSignal("");
  const fetchQuote = () => {
    let min = Math.ceil(0);
    let max = Math.floor(quotes.length);
    Math.floor(Math.random() * (max - min)) + min;
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;
    setQuote(quotes[randomIndex]);
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
      <br />
      <Mascot />
      <Tasks />
    </div>
  );
}

export default App;
