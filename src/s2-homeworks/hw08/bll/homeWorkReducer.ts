import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return  [...state.sort((u1,u2) => u1.name.localeCompare(u2.name))]
            }
            if (action.payload === 'down') {
                return  [...state.sort((u1,u2) => u2.name.localeCompare(u1.name))]
            }
            else
                return state
             // need to fix
        }
        case 'check': {
            action.payload = 18
            return state.filter(u => u.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
