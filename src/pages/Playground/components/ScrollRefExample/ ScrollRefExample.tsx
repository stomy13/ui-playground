import ShortcutIcon from '@mui/icons-material/Shortcut'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { useRef } from 'react'
import { EquipmentTitle } from '~/components/feature/EquipmentTitle/EquipmentTitle'
import { getBaseUrl } from '~/config/url'
type Cat = {
  id: number
  imageUrl: string
}

function makeCatList(): Cat[] {
  const catList: Cat[] = []
  for (let i = 0; i < 11; i++) {
    catList.push({
      id: i,
      imageUrl: `${getBaseUrl()}/cats/cat_${String(i + 1).padStart(2, '0')}.jpg`,
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
      <EquipmentTitle title="Scroll Ref" icon={<ShortcutIcon />} />
      <nav>
        <Button onClick={() => scrollToId(0)}>1番目</Button>
        <Button onClick={() => scrollToId(5)}>6番目</Button>
        <Button onClick={() => scrollToId(9)}>10番目</Button>
      </nav>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1080px',
          overflow: 'scroll',
          gap: 2,
          border: '3px solid gray',
          borderRadius: '8px',
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
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={cat.imageUrl}
              alt={`Cat #${cat.id}`}
              style={{
                width: 'auto',
                height: '200px',
                borderRadius: '8px',
              }}
            />
          </Box>
        ))}
      </Box>
    </>
  )
}
