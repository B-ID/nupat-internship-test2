import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  data: number[]
}

export default function Home(props: Props) {
  const {data} = props

  return (
    <main className="">
      {JSON.stringify(data, null, 2)}
      <div className='relative rounded aspect-video'>
        <Image 
        className='object-cover'
        alt='image'
        src="https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
        quality={100}
        fill
        />
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  // const {events_categories} = await import("../data/data.json")
  const events_categories = [1,2333, 4, 5, 6, 7]

  return {
    props: {
      data: events_categories
    }
  }
}