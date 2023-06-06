import { DESCRIPTION, TITLE } from "@/lib/config";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
