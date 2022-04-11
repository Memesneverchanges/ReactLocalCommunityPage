
export interface IAppState {
    registerWindow: boolean
}

export type TActionsAppState =
    { type: "ShowRegisterWindow" } |
    { type: "HideRegisterWindow" }

export const appStateInitialValue: IAppState = {
    registerWindow: false
}

export function appReducer(state: IAppState, action: TActionsAppState): IAppState {
    switch (action.type) {
        case "ShowRegisterWindow":
            return {
                ...state,
                registerWindow: true
            }
        case "HideRegisterWindow":
            return {
                ...state,
                registerWindow: false
            }
        default:
            throw new Error('Unexpected value on appReducer')
    }

}