import * as jobsConst from "../const/jobs.const";

const initialState = {
    jobs: [],
    isLoading: false
};

const jobsInfo = (state = initialState, action) => {

    switch (action.type) {

        // GET_JOBS

        case jobsConst.GET_JOBS:
            return { ...state, jobs: action.payload };

        case jobsConst.GET_JOBS_FULFILLED:
            return {
                ...state,
                jobs: action.payload.data,
                isLoading: false
            };

        case jobsConst.GET_JOBS_PENDING:
            return {
                ...state,
                jobs: action.payload,
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