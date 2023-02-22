const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
            case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
            case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
            case 'HEROES_REMOVE':
                return {
                    ...state,
                    heroes: state.heroes.filter(item=> item.id !== action.payload)
                }
            case 'HEROES_ADD':
                const newHeroes = {
                    "id": 2,
                    "name": "Неизвестный герой",
                    "description": "Скрывающийся в тени",
                    "element": "wind"
                }
                return {
                    ...state,
                    heroes: [...state, ]
                }
            default: return state
        }
        
    }
export default reducer;


