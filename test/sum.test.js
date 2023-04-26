const sum = require('../src/sum');

test('Verificar se a soma retorna valores positivos.', () => {
    expect(sum(2,2)).toBe(4);
});

test('Verificar a soma de 2 valores positivos', () => {
    expect(sum(25,2)).toBe(27);
    expect(sum(2,4)).not.toBe(8);
});

test('Verificar a soma de 2 valores negativos', () => {
    expect(sum(-3,-2)).toBe(-5);
    expect(sum(-3,2)).toBe(-1);
    expect(sum(3,-2)).toBe(1);
    expect(sum(0,-2)).toBe(-2);
});

test('Verificar a soma de 2 va"lores invalidos', () => {
    expect(sum("a","b")).toBe("ab");
});


test('Verificar a soma de 2 valores invalidos', () => {
    expect(sum(546546545645546546554654654564554654654564545645,
        546546545645545465465456455465465456456546545645)).toBe(1.0930930912910919e+48);
});
