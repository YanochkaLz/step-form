export interface IAddOns {
    title: string,
    description: string,
    price: number
    id: number
}

export const add_ons: ReadonlyArray<IAddOns> = [
    {
        title: 'Online service',
        description: 'Access to multiplayer games',
        price: 1,
        id: 0
    },
    {
        title: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        price: 2,
        id: 1
    },
    {
        title: 'Customizable Profile',
        description: 'Custom theme on your profile',
        price: 2,
        id: 2
    }
]