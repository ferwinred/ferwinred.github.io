import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Unbounded } from "next/font/google";
import "./globals.css";

const display = Unbounded({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Edwin Arias — Fullstack Developer & Data Engineering",
  description:
    "Portafolio de Edwin Fernando Arias Arrieta: desarrollo fullstack con .NET, Python, Angular y AWS, y proyectos de ingeniería de datos con Spark, Kafka y dbt.",
  metadataBase: new URL("https://ferwinred.github.io"),
  openGraph: {
    title: "Edwin Arias — Fullstack Developer & Data Engineering",
    description: "Fullstack .NET · Python · Angular · AWS | Data engineering: Spark · Kafka · dbt",
    url: "https://ferwinred.github.io",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
