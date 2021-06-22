import axios from "axios";

export const fetchJobs = () =>
    axios.get(`https://weluvdev-7a31a-default-rtdb.europe-west1.firebasedatabase.app/`);