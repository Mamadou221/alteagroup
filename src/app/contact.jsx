export default function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
      <p className="mb-4">Pour toute demande d’information, veuillez remplir le formulaire ci-dessous :</p>
      <form className="grid grid-cols-1 gap-4 max-w-lg">
        <input type="text" placeholder="Nom" className="p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
        <textarea placeholder="Message" className="p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Envoyer</button>
      </form>
    </div>
  )
}
