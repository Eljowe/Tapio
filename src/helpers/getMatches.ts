import axios from "axios";

function getMatches() {
    axios.get("https://spl.torneopal.net/taso/rest/getMatches?team_id=35119831&tpid=-260141292")
    .then((response) => console.log(response))

}

export default getMatches;