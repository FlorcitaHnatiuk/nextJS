import { Layout } from '../components/layouts'
import { NextPage, GetStaticProps  } from 'next'
import { pokeApi } from '@/api'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = (props) => {
  console.log(props)
  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  )
}

// Esto es del lado del servidor, por ende se estará cargando previamente
export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get('/pokemon?limit=151')
  //console.log(data)
  return {
    props: {
      pokemons: data.results
    }
  }
}
export default Home;