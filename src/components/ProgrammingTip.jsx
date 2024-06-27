import { createSignal, onMount } from "solid-js";
import styles from "./ProgrammingTip.module.css";

export default function ProgrammingTip() {
  const [tip, setTip] = createSignal({
    title: "Fetching a random programming tip...",
    description: "",
    url: "",
  });

  const fetchTip = async () => {
    try {
      const response = await fetch(
        "https://dev.to/api/articles?tag=programming&per_page=10"
      );
      const data = await response.json();
      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedTip = data[randomIndex];
        setTip({
          title: selectedTip.title,
          description: selectedTip.description,
          url: selectedTip.url,
        });
      } else {
        setTip({
          title: "No programming tips available at the moment.",
          description: "",
          url: "",
        });
      }
    } catch (error) {
      setTip({
        title: "Failed to fetch programming tip.",
        description: "",
        url: "",
      });
      console.error(error);
    }
  };

  onMount(() => {
    fetchTip();
  });

  return (
    <div class={styles.tipContainer}>
      <h2>Daily Programming Tip</h2>
      <h3>{tip().title}</h3>
      <p>{tip().description}</p>
      {tip().url && (
        <a href={tip().url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      )}
      <button onClick={fetchTip} class={styles.fetchButton}>
        Get Another Tip
      </button>
    </div>
  );
}
