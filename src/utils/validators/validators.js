export const required = value => {
    if(value) return undefined;
    return "Поле должно быть заполнено";
}

export const maxLengthCreator = maxLength => value => {
    if(value.length > maxLength) return `Вы ввели максимально допустимое количество символов (${maxLength})`;
    return undefined;
}