import { useEffect, useRef } from 'react';
import {
  CardDiv,
  CardImage,
  CardName,
  InfoChip,
  InfoContainer,
  Screen,
} from '../styles/card/Card.styles';
import { Character } from '../types';

export const Card = (character: Character) => {
  const { id, name, gender, origin, image } = character;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const screenRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const originName = origin?.name;

  useEffect(() => {
    const screen = screenRef.current;
    const title = titleRef.current;

    let interval: NodeJS.Timeout | null = null;

    if (screen && title) {
      const handleMouseEnter = () => {
        let iteration = 0;

        clearInterval(interval!);

        interval = setInterval(() => {
          title.innerText = title.dataset
            .value!.split('')
            .map((_letter, index) => {
              if (index < iteration) {
                return title.dataset.value![index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join('');

          if (iteration >= title.dataset.value!.length) {
            clearInterval(interval!);
          }

          iteration += 1 / 3;
        }, 30);
      };

      screen.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        screen.removeEventListener('mouseenter', handleMouseEnter);
        clearInterval(interval!);
      };
    }
  }, []);

  return (
    <CardDiv ref={screenRef} $image={image}>
      <Screen></Screen>
      <CardImage $image={image} />{' '}
      <InfoContainer>
        <InfoChip>{`Identified with number ${id}`}</InfoChip>
        <InfoChip>{`This is a ${gender === 'unknown' ? 'unknown gender' : gender} character from ${
          originName === 'unknown' ? 'an unknown place' : originName
        }.`}</InfoChip>
        <CardName>
          <h2 className='randomLetters' ref={titleRef} data-value={name}>
            {name}
          </h2>
        </CardName>
      </InfoContainer>
    </CardDiv>
  );
};
