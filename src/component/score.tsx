import { useContext } from "react";

// local files
import { GameContext } from "@/provider/game-context";
import styles from "@/style/score.css";

export default function Score() {

    const { score } = useContext(GameContext);

    return (
        <div className={styles.score}>
            Score
            <div>{score}</div>
        </div>
    );
}