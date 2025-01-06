export const getBaseUrl = () => import.meta.env.BASE_URL

export const appEnv = {
  isLocal: import.meta.env.VITE_APP_ENV === 'local',
  isProduction: import.meta.env.VITE_APP_ENV === 'production',
}
