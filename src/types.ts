export type Uuid = `${string}-${string}-${string}-${string}-${string}`

export type RequireSome<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>

export interface ProfileInsight {
  uuid: Uuid
  group: string
  name: string
  notes: string
  browser: string
  browserNeedsUpdate: boolean | null
  appNeedsUpdate: boolean | null
  updated: number
}

export interface ProfileUpdate {
  name?: string
  os?: System
  browser?: Browser
  group?: string
  notes?: string
  googleServices?: boolean
  startUrl?: string
  enableLock?: boolean
  navigator?: Navigator
  storage?: Storage
  network?: Network
  plugins?: Plugins
  timezone?: Timezone
  geolocation?: Geolocation
  audioContext?: AudioContext
  canvas?: Canvas
  fonts?: Fonts
  mediaDevices?: MediaDevices
  webRTC?: WebRTC
  webGL?: WebGL
  webGLMetadata?: WebGLMetadata
  extensions?: Extensions
  ports?: Ports
}

export type System = 'win' | 'mac' | 'lin' | 'android'

export type Browser = 'mimic' | 'stealthfox' | 'mimic_mobile'

export type Navigator = {
  userAgent: string
  resolution: string
  language: string
  platform: string
  doNotTrack: boolean
  hardwareConcurrency: number
}

export type Storage = {
  local: boolean
  extensions: boolean
  bookmarks: boolean
  history: boolean
  passwords: boolean
  serviceWorkerCache: boolean // local must be `true`
}

export type Network = {
  proxy: {
    type: 'NONE' | 'HTTP' | 'SOCKS'
    host: string
    port: number
    username: string
    password: string
  }
  dns: string[]
}

export type Plugins = {
  description: string
  enableVulnerable: boolean
  enableFlash: boolean
}

export type Timezone = {
  mode: 'REAL' | 'FAKE'
  fillBasedOnExternalIp: boolean
  zoneId: string
}

export type Geolocation = {
  mode: 'PROMPT' | 'BLOCK' | 'ALLOW'
  fillBasedOnExternalIp: boolean
  lat: number
  lng: number
  accuracy: number
}

export type AudioContext = {
  mode: 'REAL' | 'NOISE'
}

export type Canvas = {
  mode: 'REAL' | 'BLOCK' | 'NOISE'
}

export type Fonts = {
  mode: 'REAL' | 'FAKE'
  maskGlyphs: boolean
  families: string[]
}

export type MediaDevices = {
  mode: 'REAL' | 'FAKE'
  videoInputs: number
  audioInputs: number
  audioOutputs: number
}

export type WebRTC = {
  mode: 'REAL' | 'BLOCK' | 'FAKE'
  fillBasedOnExternalIp: boolean
  publicIp: string
  localIps: string[]
}

export type WebGL = {
  mode: 'REAL' | 'NOISE'
}

export type WebGLMetadata = {
  mode: 'MASK' | 'REAL'
  vendor: string
  renderer: string
}

export type Extensions = {
  enable: boolean
  names: string[]
}

export type Ports = {
  mode: 'REAL' | 'FAKE'
  localPortsExclude: number[]
}
