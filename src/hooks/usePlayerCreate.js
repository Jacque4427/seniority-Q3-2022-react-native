import {BASE_URL, PLAYER_URL, AUTHOR_ID} from '../helpers/constants';

export const usePlayerCreate = async (player, callback) => {
  const newPlayer = {...player, idAuthor: AUTHOR_ID};

  await axios
    .post(`${BASE_URL}${PLAYER_URL}`, newPlayer)
    .then(res => {
      console.log('response', res);
      if (callback) {
        callback();
      }
    })
    .catch(error => {
      console.log('error', error);
    });
};
