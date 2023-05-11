import "./globals.css";

export const metadata = {
  title: "Monitore  ",
  description: "A Website about Monitors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-black text-white"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&display=optional"
        />
        <link rel="icon" href="/favicon(1).ico" />
      </head>
      <body>
          <div className="bg-white text-black ">
            <a href="#" className="Button">Home</a>
            <a href="#" className="Button">Link 1</a>
            <a href="#" className="Button">Link 2</a>
            <a href="#" className="Button">Link 3</a>
          </div>
        {children}
      </body>
    </html>
  );
}