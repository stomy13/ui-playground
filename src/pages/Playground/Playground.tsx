import { useRef } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Helmet } from 'react-helmet'
import { MainLayout } from '../../components/mainLayout/MainLayout'
import { ContextExample } from './components/ContextExample/ContextExample'
import { UpdateStateQueue } from './components/UpdateStateQueue/UpdateStateQueue'

type Props = {
  pageTitle: string
}

export function Playground({ pageTitle }: Props) {
  return (
    <MainLayout>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Typography>{"Let's play with React and MUI components!"}</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          padding: 2,
        }}
      >
        <UpdateStateQueue />
        <ContextExample />
      </Box>
      <CatFriends />
    </MainLayout>
  )
}

type Cat = {
  id: number
  imageUrl: string
}

export function CatFriends() {
  const catList: Cat[] = []
  for (let i = 0; i < 10; i++) {
    catList.push({
      id: i,
      imageUrl: 'https://placekitten.com/250/200?image=' + i,
    })
  }

  const itemsRef = useRef<Map<number, HTMLLIElement> | null>(null)

  function scrollToId(itemId: number) {
    const map = getMap()
    const node = map.get(itemId)
    if (node) {
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }

  function getMap(): Map<number, HTMLLIElement> {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map()
    }
    return itemsRef.current
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>Tom</button>
        <button onClick={() => scrollToId(5)}>Maru</button>
        <button onClick={() => scrollToId(9)}>Jellylorum</button>
      </nav>
      <div>
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          {catList.map(cat => (
            <Box
              key={cat.id}
              ref={(node: HTMLLIElement | null) => {
                const map = getMap()
                if (node) {
                  map.set(cat.id, node)
                } else {
                  map.delete(cat.id)
                }
              }}
            >
              <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
            </Box>
          ))}
        </Box>
      </div>
    </>
  )
}
