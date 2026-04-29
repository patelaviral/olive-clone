import "./globals.css";

export const metadata = {
  title: "Olive Clone",
  description: "Olive style landing hero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
