import Flowers from '@/components/flowers'
import Link from 'next/link'
import { gifts } from '@/data/gifts'

const colors = {
  branco: 'bg-[#fff]',
  preto: 'bg-[#000]',
  cinza: 'bg-[#5b5d5a]',
  bambu: 'bg-[#f6c042]',
}

export default async function Home() {
  const categories = Array.from(new Set(gifts.filter(gift => gift.category).map(gift => gift.category)))
  console.log("🚀 ~ Home ~ categories:", categories)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Flowers />
      <h1 className="flex flex-col items-center text-3xl">
        CHÁ DE CASA NOVA <br />{' '}
        <span className="font-gwendolyn">Myslayny e Kadu</span>
      </h1>

      <section className="my-10 flex flex-col items-center gap-4 border-gray-300 border-t-2 border-b-2 py-5 pb-4">
        <h2 className="flex flex-col items-center text-3xl leading-none">
          Paleta de cores <br />
          <span className="font-gwendolyn">Inspirações</span>
        </h2>
        <ul className="flex h-fit w-fit flex-wrap gap-4">
          {Object.entries(colors).map(([color, hex]) => (
            <li key={color} className="flex flex-col items-center gap-2">
              <span className={`h-8 rounded-full ${hex} aspect-square`} />
              <span className="text-gray-700 capitalize">{color}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center gap-7 px-4">
        {categories.map(category => (
          <div key={category} className="flex flex-col items-center gap-4">
            <h2 className="text-center font-semibold text-3xl">{category}</h2>
            <ul className="grid grid-cols-2 gap-4">
              {gifts.filter((gift) => gift.category === category).map(gift => (
                <li
                  key={gift.id}
                  className="flex text-wrap rounded-2xl border-2 px-4 py-2 text-xl"
                >
                  {gift.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
