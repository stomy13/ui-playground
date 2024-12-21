import { useSessionStorage } from '../../hooks/useSessionStorage'
import { WebStorage } from '../WebStorage/WebStorage'

export function SessionStorage() {
  return (
    <WebStorage
      description={
        'Session Storage はタブを閉じるとデータが失われる\nページセッションが存在する間データは維持される\nページセッションはタブやブラウザーが開いている限り続き、ページの再読み込みや復元にも耐えられる'
      }
      useStorage={useSessionStorage}
    />
  )
}
