import { describe, expect, it } from 'vitest'
import { createMultiloginApp } from './index'

describe('index.ts', () => {
  const app = createMultiloginApp()

  it('exports a function', () => {
    expect(typeof createMultiloginApp).toBe('function')
  })

  it('returns an object with profile property', () => {
    expect(typeof app.profile).toEqual('object')
  })
})
