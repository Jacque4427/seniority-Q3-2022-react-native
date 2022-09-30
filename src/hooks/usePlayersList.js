import { useState } from 'react'
import axios from "axios";
import { BASE_URL, PLAYER_URL, AUTHOR_ID } from '../helpers/constants'

export const usePlayersList = () => {
  const [players, setPlayers] = useState([])
  const getPlayers = () => {
    const config = {
      headers:{
        author: AUTHOR_ID,
      }
    };

    axios.get(`${BASE_URL}${PLAYER_URL}`, config)
      .then(res => {
        const { data } = res
        setPlayers(data);
    })
  }

  return {players, getPlayers}
}
