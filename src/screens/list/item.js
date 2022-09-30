import React from 'react';
import {ImageBackground} from 'react-native';
import {CustomIcon} from '../../components/molecules/icon';
import customStyles, {
  PlayerContainer,
  PlayerNameContainer,
  PlayerName,
  EmptyImage,
  DetailsRow,
  DetailContainer,
  TitleDetail,
  ValueDetail,
  ButtonsContainer,
  IconContainer,
} from './index.styles';

const Item = ({player, navigation}) => {
  const renderImage = () => {
    if (player.image) {
      return (
        <ImageBackground
          style={customStyles.image}
          imageStyle={{borderRadius: 10}}
          source={{uri: player.image}}>
          <PlayerNameContainer>
            <PlayerName>
              {player.firstName} {player.lastName}
            </PlayerName>
          </PlayerNameContainer>
        </ImageBackground>
      );
    }
    return (
      <>
        <EmptyImage>Imagen no encontrada</EmptyImage>
        <PlayerNameContainer>
          <PlayerName>
            {player.firstName} {player.lastName}
          </PlayerName>
        </PlayerNameContainer>
      </>
    );
  };

  const renderDetailsRow = () => {
    return (
      <DetailsRow>
        {renderDetail('Ataque', player.attack)}
        {renderDetail('Defensa', player.defense)}
        {renderDetail('Skills', player.skills)}
      </DetailsRow>
    );
  };

  const renderDetail = (title, value) => {
    return (
      <DetailContainer>
        <TitleDetail>{title}</TitleDetail>
        <ValueDetail>{value}</ValueDetail>
      </DetailContainer>
    );
  };

  const renderButtonsRow = () => {
    return (
      <ButtonsContainer>
        <IconContainer alignItems={'flex-end'}>
          <CustomIcon
            onPress={() => navigation.navigate('Form', {player})}
            disabled={false}
            height={40}
            width={40}
            source={require('../../assets/edit-icon.png')}
          />
        </IconContainer>
        <IconContainer alignItems={'flex-start'}>
          <CustomIcon
            onPress={() => console.log('siii')}
            disabled={false}
            height={40}
            width={40}
            source={require('../../assets/delete-icon.png')}
          />
        </IconContainer>
      </ButtonsContainer>
    );
  };

  return (
    <PlayerContainer>
      {renderImage()}
      {renderDetailsRow()}
      {renderButtonsRow()}
    </PlayerContainer>
  );
};

export {Item};
