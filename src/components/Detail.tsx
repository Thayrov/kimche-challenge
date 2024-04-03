import {
  BackButton,
  CharacterDetail,
  CharacterImage,
  CharacterName,
  DetailContainer,
  SmallerCharacterName,
} from '../styles/detail/Detail.styles';
import { TiArrowBackOutline } from 'react-icons/ti';
import { Screen } from '../styles/card/Card.styles';
import Loader from './Loader';
import { useCharacter } from '../graphql/hooks';

const Detail = ({ id, onClose }: { id: string; onClose: () => void }) => {
  const { data, error } = useCharacter(id);
  if (error) return <p>Error :(</p>;

  const { name, origin, gender, status, image, species } = data.character;

  return (
    <DetailContainer>
      <Screen></Screen>
      {!name ? (
        <Loader />
      ) : (
        <>
          {name?.length > 27 ? (
            <SmallerCharacterName>{name}</SmallerCharacterName>
          ) : (
            <CharacterName>{name}</CharacterName>
          )}

          <CharacterDetail>
            {`This character, hailing from ${
              origin?.name === 'unknown' ? 'an unknown place' : origin?.name
            },`}
            <br />
            {`is distinguished as a ${gender} ${species}.`}
            <br />
            {`Currently, it is in a ${status} state,`}
            <br />
            {`adding an intriguing layer to their already complex existence.`}
          </CharacterDetail>
          <CharacterImage src={image} alt={name} />
        </>
      )}
      <BackButton onClick={onClose}>
        <TiArrowBackOutline />
      </BackButton>
    </DetailContainer>
  );
};

export default Detail;
