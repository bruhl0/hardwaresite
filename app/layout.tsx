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
    <html lang="en" className="bg-black text-white">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&display=optional"
        />
        <link rel="icon" href="/favicon(1).ico" />
      </head>
      <body className="h-full">
        <div className="z-10 text-center">
          <a href="/">
            <h1 className="mt-44 p-10 text-5xl md:mt-0 md:text-9xl">
              Monitore
            </h1>
          </a>
        </div>
        <div className="absolute top-10 -z-10 flex w-screen flex-row justify-center">
          <a href="/" className="m-1 h-36 w-32 rounded-xl bg-red-500"></a>
          <a href="/" className="m-1 h-36 w-32 rounded-xl bg-green-500"></a>
          <a href="/" className="m-1 h-36 w-32 rounded-xl bg-blue-600"></a>
        </div>
        {children}
      </body>
    </html>
  );
}
