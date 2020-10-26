import { useState, useEffect, useCallback } from 'react';

const useSwipe = (element, preventDefault, callback = () => {}) => {
  const [swipe, setSwipe] = useState({
    startX: 0,
    startY: 0,
    endY: 0,
    endX: 0,
    isSwiping: false, 
    startTime: new Date(),
    direction: 'RIGHT',
    distance: 0,
  });

  // handle the start of the swipe
  const handleStart = useCallback(
    (event) => {
        // preventDefault && event.preventDefault();
      const touch = event.changedTouches[0];
      setSwipe({
        ...swipe,
        startX: touch.pageX,
        startY: touch.pageY,
        startTime: new Date().getTime(),
      });
    },
    [swipe]
  );
  // handle the end of the swipe
  const handleEnd = useCallback(
    (event) => {
      event.preventDefault();
      const touch = event.changedTouches[0];
      const direction = 
        (touch.pageX - swipe.startX > 20 && 'RIGHT') ||
        (swipe.startX - touch.pageX > 20 && 'LEFT') ||
        (touch.pageY - swipe.startY > 20 && 'DOWN') ||
        (swipe.startY - touch.pageY > 20 && 'UP');
      const distance = (direction === 'LEFT' && touch.pageX - swipe.startX) ||
      (direction === 'RIGHT' && touch.pageX - swipe.startX) ||
      (direction === 'UP' && swipe.startY - touch.pageY) ||
      (direction === 'DOWN' && touch.pageY - swipe.startY)
        const time = (new Date().getTime() - swipe.startTime) / 1000
      setSwipe((swipe) => ({
        ...swipe,
        endX: touch.pageX,
        endY: touch.pageY,
        isSwiping: false, 
        elapsedTime: time,
        direction: direction,
        distance: distance,
      }));
      return swipe;
    },
    [swipe]
  );

  const handleMove = useCallback(
    (event) => {
      event.preventDefault();
      const touch = event.changedTouches[0];
      const direction =
        (touch.pageX - swipe.startX > 20 && 'RIGHT') ||
        (swipe.startX - touch.pageX > 20 && 'LEFT') ||
        (touch.pageY - swipe.startY > 20 && 'DOWN') ||
        (swipe.startY - touch.pageY > 20 && 'UP');
      const distance = (direction === 'LEFT' && touch.pageX - swipe.startX) ||
        (direction === 'RIGHT' && touch.pageX - swipe.startX) ||
        (direction === 'UP' && swipe.startY - touch.pageY) ||
        (direction === 'DOWN' && touch.pageY - swipe.startY);
      const time = (new Date().getTime() - swipe.startTime) / 1000;
      setSwipe((swipe) => ({
        ...swipe,
        endX: touch.pageX,
        endY: touch.pageY,
        isSwiping: true, 
        elapsedTime: time,
        direction: direction,
        speed: (distance) / time,
        distance: distance,
      }));
      return swipe;
    },
    [swipe]
  );

  // handle the cancellation of the swipe
  const handleCancel = useCallback((event) => {
    event.preventDefault();
    return null;
  }, []);

  //Listeners for the user touch -
  // {passive: false} is used for removing default scroll if swiping on the game area.
  // handleStart, handleEnd, handleCancel, handleMove
  useEffect(() => {
    // detect for the game area as touch area
    const touchSurface = document.querySelector(element || 'body');
    touchSurface.addEventListener('touchstart', handleStart, {
      passive: false,
    });
    touchSurface.addEventListener('touchend', handleEnd, {
      passive: false,
    });
    touchSurface.addEventListener('touchcancel', handleCancel, {
      passive: false,
    });
    touchSurface.addEventListener('touchmove', handleMove, {
      passive: false,
    });

    return () => {
      touchSurface.removeEventListener('touchstart', handleStart, {
        passive: false,
      });
      touchSurface.removeEventListener('touchend', handleEnd, {
        passive: false,
      });
      touchSurface.removeEventListener('touchcancel', handleCancel, {
        passive: false,
      });
      touchSurface.removeEventListener('touchmove', handleMove, {
        passive: false,
      });
    };
  }, [handleStart, handleCancel, handleMove, handleEnd, element]);
  return swipe;
};

export default useSwipe;
