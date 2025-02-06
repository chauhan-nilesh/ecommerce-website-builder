export const metadata = {
  title: "My SSR Page",
  description: "This is the server-side rendered homepage.",
};

export default function Home() {
  return (
    <main>
      <h1>Welcome to My SSR Page</h1>
      <p>This page is rendered on the server.</p>
      <a href="/vite-app">Go to Vite App</a>
    </main>
  );
}
