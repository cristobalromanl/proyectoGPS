import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sportify</title>
        <meta name="description" content="Reserva de Canchas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/fifa-welcome" />
      </Head>
      <Box bg='black' w='100vw' h='100vh' p={4} color='white'>
        Sportify
      </Box>
    </>
  )
}
