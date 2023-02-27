import { Layout } from '../components/layouts'
import { NextPage, GetStaticProps  } from 'next'
import { pokeApi } from '@/api'
import { Inter } from 'next/font/google'
import { PokemonListResponse, SmallPokemon } from '../interfaces';

const inter = Inter({ subsets: ['latin'] })

interface props {
  pokemons: SmallPokemon[],
}

const Home: NextPage<props> = ({pokemons}) => {
  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        {
        pokemons.map(({ id, name }) => (
          <li key={ id }> #{ id } - { name }</li>
        ))
        }
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )
  //console.table(pokemons)
  return {
    props: {
      pokemons
    }
  }
}

export default Home;