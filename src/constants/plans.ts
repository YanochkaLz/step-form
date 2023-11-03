export interface ICard {
    img: string,
    title: string,
    price: number,
    id: number
}

export const plans: ReadonlyArray<ICard> = [
    {
        img: '/icon-arcade.svg',
        title: 'Arcade',
        price: 9,
        id: 0
    },
    {
        img: '/icon-advanced.svg',
        title: 'Advanced',
        price: 12,
        id: 1
    },
    {
        img: '/icon-pro.svg',
        title: 'Pro',
        price: 15,
        id: 2
    }
]