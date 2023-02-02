![preview](https://repository-images.githubusercontent.com/596182550/b35a3133-32ce-40ca-ab7c-f23aa6889da3)

# Multilogin App - API Wrapper

Multilogin App provides access to an API only in their highest available plan through an exposed port.
This module serves as a wrapper and is written fully with TypeScript.

## Installation

...

## Usage

At the moment, this module only supports v2 beta API, but I'm working towards supporting v1 too. I am trying to decide if single instance should be given full control of both API versions or should it be created separately.

```ts
// Create instance
// You can optionally pass { port: number, version: 1 | 2 }
// Defaults to { port: 3500, version 2 }
const mla = createMultiloginApp()

// List all profiles on the account
mla.profile.index()

// Create profile (minimal requirements)
mla.profile.create({
  name: 'Your New Profile',
  os: 'mac',
  browser: 'mimic',
})

// Update profile
mla.profile.update('54db0540-66b1-418a-ae8c-a71f64edae8d', {
  name: 'Call me Anything',
})

// Destroy profile
mla.profile.destroy('54db0540-66b1-418a-ae8c-a71f64edae8d')
```

## TODO (talk to support)

Maybe mock entire API instead of actually using it? It's bad that we have to use index method on many tests, as there is no-content in response of update and destroy.

- [ ] When an API wrapper for profile automation is written, use it to run tests
- [ ] Have two types of tests. One with mocked functions and stubs and one with the actual communication with the application.
