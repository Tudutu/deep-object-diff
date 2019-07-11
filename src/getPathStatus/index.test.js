import getPathStatus from './';

describe('getPathStatus', () => {

  it('finds the correct status for a given path', () => {

    let diff = {
      added: {},
      modified: {
        person: {
          age: 4
        }
      },
      removed: {}
    }
  
    expect(getPathStatus(diff, 'person.age')).toBe('modified')

  })

  it('finds the correct status for a mixed object', () => {

    let diff = {
      added: {
        person: {
          name: 'John'
        }
      },
      modified: {
        person: {
          age: 4
        }
      },
      removed: {}
    }
  
    expect(getPathStatus(diff, 'person.name')).toBe('added')
    expect(getPathStatus(diff, 'person.age')).toBe('modified')

  })

  it('reports undefined for a non-existing path', () => {

    let diff = {
      added: {},
      modified: {},
      removed: {}
    }
  
    expect(getPathStatus(diff, 'person.age')).toBeUndefined()

  })

  it('reports undefined for a non-detailed-diff object', () => {

    let diff = {
    }
  
    expect(getPathStatus(diff, 'person.age')).toBeUndefined()
  })
})