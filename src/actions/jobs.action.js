import * as jobsAPI from "../api/jobs.api";
import * as jobsConst from "../const/jobs.const";

export const getJobs = () => ({
    type: jobsConst.GET_JOBS,
    payload: jobsAPI.fetchJobs()
})