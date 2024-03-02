import { useRef } from 'react'
import { Box } from '@mui/system'

type Cat = {
  id: number
  imageUrl: string
}

function makeCatList(): Cat[] {
  const catList: Cat[] = []
  for (let i = 0; i < 10; i++) {
    catList.push({
      id: i,
      imageUrl: 'https://placekitten.com/250/200?image=' + i,
    })
  }
  return catList
}

export function ScrollRefExample() {
  const catList = makeCatList()
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1080px',
          overflow: 'scroll',
        }}
      >
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
    </>
  )
}
