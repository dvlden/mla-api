import { profile } from './profile'
import { baseUrl } from './utils/fetch'

export function createMultiloginApp({ port = 35000, version = 2 } = {}) {
  baseUrl.value = `http://localhost.multiloginapp.com:${port}/api/v${version}`

  return {
    profile,
  }
}
