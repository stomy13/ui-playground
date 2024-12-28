import { type ReactNode, createContext, useContext } from 'react'
import { EquipmentTitle } from '~/components/feature/EquipmentTitle/EquipmentTitle'
import { EquipmentContainer } from '../EquipmentContainer/EquipmentContainer'

export function ContextExample() {
  return (
    <EquipmentContainer title={<EquipmentTitle title="Context Example" />}>
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </EquipmentContainer>
  )
}
export function Section({ children }: { children: ReactNode }) {
  const level = useContext(LevelContext)
  return (
    <section className="section">
      {/* React 19 から Context.Provider が不要になった */}
      <LevelContext value={level + 1}>{children}</LevelContext>
    </section>
  )
}

export function Heading({ children }: { children: ReactNode }) {
  const level = useContext(LevelContext)
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!')
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
    default:
      throw Error(`Unknown level: ${level}`)
  }
}

const LevelContext = createContext(0)
