import { useEffect, useRef } from 'react';
import {
  CardDiv,
  CardImage,
  CardName,
  InfoChip,
  InfoContainer,
  Screen,
} from '../styles/card/Card.styles';
const CardSkeleton = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const screenRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

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
    <CardDiv ref={screenRef} $image='skeleton-bg.jpg'>
      <Screen></Screen>
      <CardImage $image='skeleton-bg.jpg' />
      <InfoContainer>
        <br />
        <InfoChip>No Signal</InfoChip>
        <CardName>
          <h2 id='name' ref={titleRef} data-value='No Signal'>
            No Signal
          </h2>
        </CardName>
      </InfoContainer>
    </CardDiv>
  );
};
export default CardSkeleton;
