export default function DienstenPage() {
  return (
    <main className="max-w-4xl p-6 mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Wat wij doen</h1>

      <p className="text-lg text-gray-700">
        Bij <strong>BTKOK</strong> zijn we gespecialiseerd in het ontwerpen, leveren en realiseren van maatwerkoplossingen voor uw bouwprojecten.
        Of het nu gaat om nieuwbouw, renovatie of uitbreiding, wij leveren altijd vakwerk op maat.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Onze diensten omvatten:</h2>
        <ul className="pl-6 space-y-2 text-gray-700 list-disc">
          <li>
            <strong>Configuratie en Ontwerp:</strong> Met onze geavanceerde configurator stellen we samen met u de ideale bouwconstructie samen, volledig afgestemd op uw wensen.
          </li>
          <li>
            <strong>Projectmanagement:</strong> Van planning tot oplevering begeleiden wij het hele bouwproces en zorgen we voor een soepele uitvoering.
          </li>
          <li>
            <strong>Prefab en Montage:</strong> We leveren hoogwaardige, geprefabriceerde bouwcomponenten en zorgen voor een vakkundige montage op locatie.
          </li>
          <li>
            <strong>Dak- en Wandbekleding:</strong> Wij verzorgen professionele plaatsing van sandwichpanelen, rabatdelen, natuursteen en zetwerk voor een perfecte afwerking.
          </li>
        </ul>
      </div>

      <p className="text-lg text-gray-700">
        Bij BTKOK staan <strong>kwaliteit</strong>, <strong>flexibiliteit</strong> en <strong>klantgerichtheid</strong> centraal. Wij denken actief met u mee om duurzame en functionele oplossingen te realiseren die voldoen aan de hoogste standaarden.
      </p>

      <p className="text-lg text-gray-700">
        Neem gerust <a href="/contact" className="text-blue-600 underline">contact</a> met ons op voor meer informatie of een vrijblijvend adviesgesprek.
      </p>
    </main>
  );
}
