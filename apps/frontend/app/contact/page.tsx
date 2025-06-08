export default function ContactPage() {
  return (
    <main className="max-w-4xl p-6 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Contact</h1>
      <form className="grid max-w-md gap-4">
        <input type="text" placeholder="Naam" className="p-2 border rounded" />
        <input type="email" placeholder="E-mailadres" className="p-2 border rounded" />
        <textarea placeholder="Bericht" className="h-32 p-2 border rounded" />
        <button type="submit" className="px-4 py-2 text-white bg-black rounded">Verstuur</button>
      </form>
    </main>
  );
}
