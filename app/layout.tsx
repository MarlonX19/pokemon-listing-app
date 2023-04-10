import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./presentation/components";

export const metadata = {
  title: "Pokemon list",
  description: "A incredible list of Pokemons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
