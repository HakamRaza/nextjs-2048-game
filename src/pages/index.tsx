import Head from "next/head";
import Image from "next/image";
import Board from "@/component/board";
import Score from "@/component/score";
import styles from "@/style/index.module.css";

export default function Home() {
    return (
        <div className={styles.twenty48}>
            <Head>
                <title>2048</title>
                <meta name="description" content="2048 game built in NextJS and TypeScript." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="favicon180.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon16.png" />
            </Head>

            <header>
                <h1>2048</h1>
                <Score />
            </header>

            <main>
                <Board />
            </main>

            <footer>
                <div className={styles.socials}>
                    <a
                        href="https://github.com/hakamraza/nextjs-2048-game"
                        target="_blank"
                        rel="noopener"
                    >
                        <Image
                            src="social-github.svg"
                            alt="2048-in-react on GitHub"
                            width={32}
                            height={32}
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
}