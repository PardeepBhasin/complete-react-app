const initialState = {
    isLoading: false
}
const HomePageReducer  = (state:any = initialState, action:any) => {
    switch(action.type) {
        case 'FETCH_RECORDS':
            return {
                ...state,
                isLoading: true,
            }
        case 'FETCH_RECORDS_SUCCESS': 
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case 'FETCH_RECORDS_ERROR': 
            return {
                ...state,
                isLoading: false
            }    
    }
}

export default HomePageReducer;