import { TruncatePipe } from './truncate.pipe'

describe('TruncatePipe', () => {
  let pipe: TruncatePipe

  beforeEach(() => {
    pipe = new TruncatePipe()
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy()
  })

  it('should truncate a text that is longer than the threshold', () => {
    expect(pipe.transform('abcdefg', 3, '...')).toEqual('abc...')
  })
})
