import axios from "axios";

function getMatches() {
    axios.get("https://spl.torneopal.fi/taso/rest/getClub?R9SWE9Q6UE")
    .then((response) => console.log(response))

}

export default getMatches;