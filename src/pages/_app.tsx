import type { AppProps } from "next/app";
import GameProvider from "@/provider/game-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GameProvider>
            <Component {...pageProps} />
        </GameProvider>
    );
}