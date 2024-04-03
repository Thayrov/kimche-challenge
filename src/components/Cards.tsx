import { Suspense, useState } from 'react';
import { Card } from './Card';
import { CardsDiv } from '../styles/cards/Cards.styles';
import CardSkeleton from './CardSkeleton';
import { Character } from '../types';
import { useCharacters } from '../graphql/hooks';
import Detail from './Detail';

const Cards = ({ searchResults }: { searchResults?: Character[] }) => {
  const { data } = useCharacters();
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);

  const results =
    searchResults?.length === 0
      ? (data as { characters: { results: Character[] } })?.characters?.results
      : searchResults;

  const handleCardClick = (id: string) => {
    setSelectedCharacterId(id);
  };
  return (
    <>
      <CardsDiv>
        {results?.map((char: Character, i: number) => (
          <div key={i} onClick={() => handleCardClick(char.id)}>
            <Suspense fallback={<CardSkeleton />}>
              <Card {...char} />
            </Suspense>
          </div>
        ))}
      </CardsDiv>
      {selectedCharacterId && (
        <Suspense fallback={<div>Loading detail...</div>}>
          <Detail id={selectedCharacterId} onClose={() => setSelectedCharacterId(null)} />
        </Suspense>
      )}
    </>
  );
};

export default Cards;
