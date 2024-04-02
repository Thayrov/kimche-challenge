import { Suspense } from 'react';
import { Card } from './Card';
import { CardsDiv } from '../styles/cards/Cards.styles';
import CardSkeleton from './CardSkeleton';
import { Character } from '../types';
import { useCharacters } from '../graphql/hooks';

const Cards = ({ searchResults }: { searchResults?: Character[] }) => {
  const { data } = useCharacters();
  const results =
    searchResults?.length === 0
      ? (data as { characters: { results: Character[] } })?.characters?.results
      : searchResults;
  console.log('🚀 ~ Cards ~ searchResults:', searchResults);
  console.log('🚀 ~ Cards ~ data:', data);

  return (
    <CardsDiv>
      {results?.map((char: Character, i: number) => (
        <Suspense key={i} fallback={<CardSkeleton />}>
          <Card {...char} />
        </Suspense>
      ))}
    </CardsDiv>
  );
};

export default Cards;
