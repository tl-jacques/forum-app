import { left, right } from "./either"



test('success result', () => {
    const success = right('success')

    expect(success.isRight()).toBe(true)
})

test('error result', () => {
    const error = left('error')

    expect(error.value).toEqual('error')
})