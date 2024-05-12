import type { AppProps } from "next/app";
import GameProvider from "@/provider/game-context";
import "@/style/global.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GameProvider>
            <Component {...pageProps} />
        </GameProvider>
    );
}