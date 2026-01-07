// components/blog/BlogCTA.tsx

export default function BlogCTA({ category }: { category: string }) {
  if (category === 'etterem-tulajdonosoknak') {
    return (
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8 rounded-lg my-12">
        <h3 className="text-2xl font-bold mb-4">
          🚀 Készen állsz a változásra?
        </h3>
        <p className="text-lg mb-6">
          Próbáld ki a FoglaljOnline-t <strong>30 napig INGYEN</strong>, 
          hitelkártya nélkül. Több ezer vendég, kevesebb no-show, magasabb bevétel.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Ingyenes kipróbálás
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
            Kérek demót
          </button>
        </div>
        <p className="text-sm mt-4 opacity-90">
          ✓ Nincs setup díj  ✓ Azonnali aktiválás  ✓ Magyarul
        </p>
      </div>
    )
  }
  
  // Vendégeknek
  return (
    <div className="bg-gray-50 p-8 rounded-lg my-12 text-center">
      <h3 className="text-2xl font-bold mb-4">
        🍽️ Foglalj asztalt most!
      </h3>
      <p className="text-gray-700 mb-6">
        Válassz 80+ budapesti étterem közül
      </p>
      <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark">
        Éttermek böngészése
      </button>
    </div>
  )
}