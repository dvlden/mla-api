export const baseUrl = {
  _value: '',
  set value(value: string) {
    this._value = value
  },
  get value() {
    return this._value
  },
}

export async function useFetch<T>(
  input: string = '',
  init?: Omit<RequestInit, 'body'> & { body?: Record<PropertyKey, unknown> },
) {
  const { headers, body, ...options } = init ?? {}

  return fetch(`${baseUrl.value}/${input}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then<T | Response>((res) => {
      // TODO: Temporarily until they fix API to always return JSON
      if (res.headers.get('content-type')) {
        return res.json()
      }

      return res
    })
    .catch((err) => console.error(err))
}
