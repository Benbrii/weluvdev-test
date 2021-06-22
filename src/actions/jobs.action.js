import * as jobsAPI from "../api/jobs.api";
import * as jobsConst from "../const/jobs.const";

export function getJobs() {
    return {
        type: jobsConst.GET_JOBS,
        payload: jobsAPI.fetchJobs()
    };
}