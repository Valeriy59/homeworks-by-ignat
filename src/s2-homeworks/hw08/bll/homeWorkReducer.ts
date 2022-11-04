import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return [...state.sort((u1,u2) => action.payload === 'up' ? u1.name.localeCompare(u2.name): u2.name.localeCompare(u1.name))] // need to fix
        }
        case 'check': {
            action.payload = 18
            return state.filter(u => u.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
