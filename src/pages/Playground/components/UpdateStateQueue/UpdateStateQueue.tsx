import { useState } from 'react'
import { EquipmentTitle } from '../../../../components/feature/EquipmentTitle/EquipmentTitle'
import { EquipmentContainer } from '../EquipmentContainer/EquipmentContainer'

export function UpdateStateQueue() {
  const [index, setIndex] = useState(0)

  function handleClick() {
    // 全てキューに入って、まとめて実行される
    setIndex(5)
    setIndex(index) // indexで上書きされる
    setIndex(i => i + 1)
    setIndex(i => i + 1)
  }

  return (
    <EquipmentContainer title={<EquipmentTitle title="Update State Queue" />}>
      <button onClick={handleClick}>Next {index + 1}</button>
    </EquipmentContainer>
  )
}
