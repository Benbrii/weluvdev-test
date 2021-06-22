import axios from "axios";

export const fetchJobs = () =>
    axios.get(`https://weluvdev-7a31a-default-rtdb.europe-west1.firebasedatabase.app/.json`);

// https://weluvdev-7a31a-default-rtdb.europe-west1.firebasedatabase.app/0.json = 101 Switching Protocols
// https://weluvdev-7a31a-default-rtdb.europe-west1.firebasedatabase.app/.json = j'ai tout ! :D