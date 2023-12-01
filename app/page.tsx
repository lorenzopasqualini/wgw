import Image from 'next/image'
import { fetchData } from './action'
import Card, { ImgProp } from '@/components/Card'
import Load from '@/components/Load'

export default async function Home() {
  const data= await fetchData(1)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 gap-16">
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: ImgProp, index:number) => (
            <Card key={item.id} series={item} index={index} />
        ))}
      </section>
      <Load />
    </main>
  )
}
