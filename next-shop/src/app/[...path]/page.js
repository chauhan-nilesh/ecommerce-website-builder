export const metadata = {
  title: "My SSR Page",
  description: "This is the server-side rendered homepage.",
};

export default function ViteApp() {

  useEffect(() => {
    // Redirect to the Vite app and preserve the path
    window.location.replace(`/vite-build/index.html`);
  }, []);

  return <p>Loading Vite App...</p>;
}
