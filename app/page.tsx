import { fetchData } from './action'
import Load from '@/components/Load'
import Card, { ImgProp } from '@/components/Card'

export default async function Home() {
  const data= await fetchData(1)
  return (
    <main className="flex flex-col items-center p-16">
      <section className="flex flex-wrap gap-8 justify-center">
        {data.map((item: ImgProp, index:number) => (
            <Card key={item.id} series={item} index={index} />
        ))}
      </section>
      <Load />
    </main>
  )
}
