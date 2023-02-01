import type { ProfileInsight, ProfileUpdate, RequireSome, Uuid } from './types'
import { useFetch } from './utils/fetch'

export const profile = {
  index() {
    return useFetch<ProfileInsight[]>('profile', {
      method: 'GET',
    })
  },
  create(profile: RequireSome<ProfileUpdate, 'name' | 'os' | 'browser'>) {
    return useFetch<ProfileUpdate>('profile', {
      method: 'POST',
      body: profile,
    })
  },
  update(uuid: Uuid, profile: Omit<ProfileUpdate, 'os' | 'browser'>) {
    return useFetch<ProfileInsight>(`profile/${uuid}`, {
      method: 'POST',
      body: profile,
    })
  },
  destroy(uuid: Uuid) {
    return useFetch(`profile/${uuid}`, {
      method: 'DELETE',
    })
  },
}

export const maintain = {
  versionMigrate(uuid: Uuid) {
    return useFetch(`profile/${uuid}/migrate`, {
      method: 'POST',
    })
  },
  coreUpdate(uuid: Uuid) {
    return useFetch(`profile/${uuid}/update`, {
      method: 'POST',
    })
  },
}
