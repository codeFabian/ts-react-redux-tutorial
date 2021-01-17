const ADD_NAME = "names/ADD_NAME" as const;

export const add_name = (text: string) => ({ type: ADD_NAME, payload: text })

type NameAction = ReturnType<typeof add_name>;

export type Name = {
    text: string;
}

type NameState = Name

const initialState: NameState = {
    text: 'Fabian'
}

const names = (state: NameState = initialState, action: NameAction) => {
    switch (action.type) {
        case ADD_NAME:
            return Object.assign({}, { text: action.payload })
        default:
            return state
    }
}

export default names;