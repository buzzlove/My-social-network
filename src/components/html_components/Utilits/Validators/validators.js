export const required = (value) => {
    if(value) return undefined
             return 'Введите сообщение'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength)return `Максимальная длина ${maxLength} символов`
    return undefined
}
