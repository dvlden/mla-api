![preview](https://repository-images.githubusercontent.com/596182550/b35a3133-32ce-40ca-ab7c-f23aa6889da3)

# Multilogin App - API Wrapper

Multilogin App provides access to an API only in their highest available plan through an exposed port.
This module serves as a wrapper and is written fully with TypeScript.

## TODO (talk to support)

Maybe mock entire API instead of actually using it? It's bad that we have to use index method on many tests, as there is no-content in response of update and destroy.

- [ ] When an API wrapper for profile automation is written, use it to run tests
- [ ] Have two types of tests. One with mocked functions and stubs and one with the actual communication with the application.
