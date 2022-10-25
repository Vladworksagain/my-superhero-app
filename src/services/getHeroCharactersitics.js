import axios from "axios";

const getHeroChar = (id, options) => {
  return axios.get(`/${id}/${options}`)
}

export default getHeroChar