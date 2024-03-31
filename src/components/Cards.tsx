import { Suspense } from 'react';
import { Card } from './Card';
import { CardsDiv } from '../styles/cards/Cards.styles';
import CardSkeleton from './CardSkeleton';
import { Character } from '../types';
import { useCharacters } from '../graphql/hooks';

const Cards = () => {
  const { data } = useCharacters();
  const results = (data as { characters: { results: Character[] } })?.characters?.results;

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
