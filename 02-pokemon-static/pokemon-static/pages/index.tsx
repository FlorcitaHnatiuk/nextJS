import { Button } from '@nextui-org/react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Hello world!</h1>
      <Button color="gradient">
        Welcome
      </Button>
    </>
  )
}
