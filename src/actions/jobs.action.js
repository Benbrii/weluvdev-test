import * as jobsAPI from "../api/jobs.api";
import * as jobsConst from "../const/jobs.const";

export const getJobs = () => ({
    type: jobsConst.GET_JOBS,
    payload: jobsAPI.fetchJobs()
})

export const addJobToFirebase = (title, description) => ({
    type: jobsConst.ADD_NEW_JOB,
    payload: jobsAPI.postAddNewJob(title, description)
})