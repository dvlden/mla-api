import { describe, expect, it, vi } from 'vitest'
import { createMultiloginApp } from './index'
import { ProfileInsight } from './types'

describe('profile.ts', () => {
  const app = createMultiloginApp()
  let profile: ProfileInsight

  it('creates a profile', async () => {
    const create = vi.fn(app.profile.create)

    profile = (await create({
      name: 'Biggie Smalls',
      os: 'mac',
      browser: 'mimic',
    })) as ProfileInsight

    expect(create).toHaveBeenCalled()
    expect(profile).toHaveProperty('uuid')
  })

  it('updates a profile', async () => {
    const index = vi.fn(app.profile.index)
    const update = vi.fn(app.profile.update)

    await update(profile.uuid, {
      name: 'The Notorious B.I.G.',
    })

    const profiles = (await index()) as ProfileInsight[]
    const updatedProfile = profiles.find((p) => p.uuid === profile.uuid)

    expect(update).toHaveBeenCalled()
    expect(updatedProfile).toContain({
      name: 'The Notorious B.I.G.',
    })
  })

  it('deletes a profile', async () => {
    const index = vi.fn(app.profile.index)
    const destroy = vi.fn(app.profile.destroy)

    await destroy(profile.uuid)

    const profiles = (await index()) as ProfileInsight[]
    const deletedProfile = profiles.find((p) => p.uuid === profile.uuid)

    expect(destroy).toHaveBeenCalled()
    expect(deletedProfile).toBeUndefined()
  })

  it('lists all profiles', async () => {
    const index = vi.fn(app.profile.index)
    const profiles = (await index()) as ProfileInsight[]

    const deletedProfile = profiles.find((p) => p.uuid === profile.uuid)

    expect(index).toHaveBeenCalled()
    expect(profiles).toBeInstanceOf(Array)
    expect(deletedProfile).toBeUndefined()
  })
})
