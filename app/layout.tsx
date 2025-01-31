import type { Metadata } from "next";
import "@/assets/css/globals.css";

import { ThemeProvider } from "@/app/components/theme-provider";

export const metadata: Metadata = {
  title: "Mirella Pietra : Boutique de bijoux artisanaux et de lithothérapie",
  description:
    "Bijoux artisanaux en pierres naturelles et lithothérapie. Créations uniques faites main en France, alliant l'esthétique à l'énergie des pierres. Trouvez le bijou qui vous correspond parmi nos colliers, bracelets, bagues et boucles d'oreilles en Améthyste, Quartz Rose, Oeil de Tigre et bien d'autres. Explorez les vertus des minéraux et révélez votre éclat intérieur. Livraison rapide et soignée.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
