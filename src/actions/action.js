export const actionTypes = {
    change_display_value: "CHANGE_DISPLAY",
    set_operator: "SET_OPERATOR"
}

export const change_display_value = (display_value) => {
    return{
        type: actionTypes.change_display_value,
        display_value
    }
}

export const set_operator = (display_operator) => {
    return{
        type: actionTypes.set_operator,
        display_operator
    }
}
