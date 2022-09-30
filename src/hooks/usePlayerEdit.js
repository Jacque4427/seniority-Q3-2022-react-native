import {BASE_URL, PLAYER_URL, AUTHOR_ID} from '../helpers/constants';

export const usePlayerEdit = async (player, callback) => {
  const newPlayer = {...player, idAuthor: AUTHOR_ID};

  await axios
    .patch(`${BASE_URL}${PLAYER_URL}/${newPlayer.id}`, newPlayer)
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
