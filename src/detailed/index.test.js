import detailed from './index'

describe('detailed', () => {
  
  test('no changes returns an empty object', () => {
    expect(detailed({}, {})).toStrictEqual({})
  })

  test('additions returns only added property', () => {
    expect(detailed({}, { addedProp: 1 })).toStrictEqual({ added: { addedProp: 1 } })
  })

  test('changing the name of a property returns added and removed values', () => {
    expect(detailed({ prop: 1 }, { addedProp: 1 })).toStrictEqual({ added: { addedProp: 1 }, removed: { prop: undefined } })
  })

  test('no changes returns an empty object', () => {
    expect(detailed({ prop: 1 }, { prop: 1 })).toStrictEqual({})
  })

  test('changes returns only modified property', () => {
    expect(detailed({ prop: 1 }, { prop: 2 })).toStrictEqual({ modified: { prop: 2 } })
  })

  test('additions to arrays only return an added property', () => {
    expect(detailed({ prop: [ 'value1' ] }, { prop: [ 'value1', 'value2' ]})).toStrictEqual({ added: { prop: { 1: 'value2' }}})
  })

  test('changes to arrays only return a modified property', () => {
    expect(detailed({ prop: [ 'value1' ] }, { prop: [ 'value2' ]})).toStrictEqual({ modified: { prop: { 0: 'value2' }}})
  })
  
})