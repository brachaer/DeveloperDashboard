import { createSignal } from "solid-js";
import duck from "../assets/ducky.jpeg";
import styles from "./Mascot.module.css";

export default function Mascot() {
  const [animation, setAnimation] = createSignal("bounce");
  const changeAnimation = () => {
    const animations = ["bounce", "shake", "spin"];
    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];
    setAnimation(randomAnimation);
  };

  return (
    <div
      class={`${styles.mascot} ${styles[animation()]}`}
      onClick={changeAnimation}
    >
      <img src={duck} alt="Cute Mascot" width={100} />
    </div>
  );
}
