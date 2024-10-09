/* eslint-disable no-undef */
import { destructuringObject } from "../destructuring.js";

test('testing destructuringObject', () => {
    const obj = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
            }
        ]
    };

    const result = destructuringObject(obj);
    const expected = { "0": { "description": "Двойной выстрел наносит двойной урон", "icon": "http://...", "id": 8, "name": "Двойной выстрел" }, "1": { "description": "Описание недоступно", "icon": "http://...", "id": 9, "name": "Нокаутирующий удар" } }
    expect(result).toEqual(expected);;
})