import * as jobsConst from "../const/jobs.const";

const initialState = {
    alljobs: [],
    isLoading: false
};

const jobsInfo = (state = initialState, action) => {

    switch (action.type) {

        // GET_JOBS

        case jobsConst.GET_JOBS:
            return {
                ...state,
                alljobs: action.payload
            };

        case jobsConst.GET_JOBS_FULFILLED:
            return {
                ...state,
                alljobs: action.payload.data,
                isLoading: false
            };

        case jobsConst.GET_JOBS_PENDING:
            return {
                ...state,
                alljobs: action.payload,
                isLoading: true
            };

        case jobsConst.GET_JOBS_REFUSED:
            return {
                ...state
            };

        // DEFAULT

        default:
            return state;
    }
}

export default jobsInfo;