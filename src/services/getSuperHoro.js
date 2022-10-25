import axios from "axios";

const getSuperHero = (id) => {
  return axios.get(`/${id}`)
}

export default getSuperHero