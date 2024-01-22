"use client"

const navigation =  [
        
{ name: 'Galerie', href: 'galerie' },
{ name: 'Über uns', href: 'überuns' },
{ name: 'Kontakt', href: 'kontakt' },
{ name: 'Impressum', href: 'impressum' },
{ name: 'Preise', href: 'Preise' },
 ] 
export default function Example() {
    return (
        
      <div className="bg-white py-24 sm:py-32 h-screen shadow-xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("tennis2.jpg")' }}>
        
       
        <div className="mx-auto max-w-7xl px-6 lg:px8 w-3/4">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 ">
            <div className="bg-gray-300/90  p-8 sm:p-10">
              <p className=" font-semibold">Zeiten</p>
            </div>
            <div className="font-semibold bg-gray-300/90 p-8 sm:p-10 ">
              <p>Preis pro Stunde </p> <p>Winter / Sommer</p>
            </div>
            <div className="font-semibold bg-gray-300/90 p-8 sm:p-10">
              <p>ABO-Preise Winter Saison</p> <p> (Preise Sommer auf Anfrage;</p>  <p>Buchung sofort möglich)</p>
            </div>
            <div className=" bg-gray-300/90 p-8 sm:p-10">
              <p> Montag bis Freitag</p> <p>09:00-15:00 </p> <p>15:00-22:00</p>
            </div>
            <div className="bg-gray-300/90 p-8 sm:p-10">
              <p className="text-neutral-100 opacity-0"> füller</p><p>19€ / 10€</p> <p> 26€ / 15€</p>
            </div>
            <div className="bg-gray-300/90 p-8 sm:p-10">
            <p className="text-neutral-100 opacity-0"> füller</p><p>420€ </p> <p> 620€</p>
            </div>
            <div className="bg-gray-300/90 p-8 sm:p-10">
              <p>Samstag & Sonntag </p> <p>09:00-15:00 </p> <p>15:00-22:00</p>
            </div>
            <div className="bg-gray-300/90 p-8 sm:p-10">
            <p className="text-neutral-100 opacity-0"> füller</p><p> 16€ / 10€</p> <p> 19€ / 15€</p>
            </div>

            <div className="bg-gray-300/90 p-8 sm:p-10">
            <p className="text-neutral-100 opacity-0"> füller</p><p>390€</p> <p> 520€</p>
            </div>
        
          </div>
            
        {/* <div> <style> "text-neutral-100 opacity-0"</style> <p>...</p>
        </div> */}
       <div className= "py-4">
        <div className="border-b border-gray-200 bg-gray-300/90 px-4 py-5 sm:px-6 sm:mx-0 sm:rounded-2xl">
         <h1 className="text-neutral font-semibold leading-6 text-gray-900 ">Trainingsangebot : Einzel- oder Gruppenunterricht nach Absprache </h1>
           <h2> Bespannungsservice im Haus</h2> <p> Haben Sie Sonderwünsche? Sprechen Sie uns an.</p>
     </div>
     </div>
     <div className="py-4mt-10 flex items-center justify-center gap-x-10">
              <a
                href="platz buchen"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Platz buchen
              </a>
              <a href="kontakt" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kontakt <span aria-hidden="true">→</span>
              </a>
            </div>
        </div>
      </div>
    )
  }
  