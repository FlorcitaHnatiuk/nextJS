import { Layout } from '../components/layouts'
import { Button } from '@nextui-org/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Listado de Pokemons'>
      <Button color="gradient">Hello world</Button>
    </Layout>
  )
}
