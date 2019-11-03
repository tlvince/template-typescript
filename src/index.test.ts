import { greet } from '.'

describe('greet', () => {
  it('should return a default message', () => {
    expect(greet()).toBe('Hello world')
  })

  it('should accept an optional message', () => {
    expect(greet('Jimmy')).toBe('Hello Jimmy')
  })
})
