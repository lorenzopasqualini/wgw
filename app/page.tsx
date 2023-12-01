import Image from 'next/image'
import { fetchData } from './action'
import Card, { ImgProp } from '@/components/Card'

export default async function Home() {
  const data= await fetchData(1)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data.map((item: ImgProp, index:number) => (
          <Card key={item.id} series={item} index={index} />
        ))}
      </div>
    </main>
  )
}
