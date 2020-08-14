const initialstate={
    employelist: {}
}
function employeeReducer(state=initialstate, action){
    switch(action.type){
        case "ADD_EMPLOYEE":
            return{
                ...state,
                employelist:action.payload
            }
        default:
            return state;
    }
}

export default employeeReducer;