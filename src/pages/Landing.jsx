import React from 'react';

const Landing = () => {
  return (
    <div className='container mx-auto text-center py-12 px-6 bg-gray-100'>
      <div className='container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='text-left'>
          <h1 className='text-4xl font-bold mb-6'>
            Elevate Your Chess Game with the Masters
          </h1>
          <p className='text-lg mb-4'>
            Watching grandmasters play is more than just an opportunity to enjoy
            the game—it’s your gateway to mastering chess at a deeper level.
            Their games reveal patterns and strategies that are crucial to
            success, from subtle positional maneuvers to bold tactical
            combinations. By observing their moves, you’ll start to recognize
            recurring motifs, openings, and endgames that can transform how you
            approach your own matches.
          </p>
          <p className='text-lg mb-4'>
            Pattern recognition is the hallmark of great players. Grandmasters
            see beyond individual moves—they understand the bigger picture of
            the board. By studying their games, you’ll train your mind to spot
            patterns and opportunities faster, improving your ability to predict
            your opponent’s plans and execute winning strategies under pressure.
          </p>
          <p className='text-lg'>
            Imagine stepping into a game armed with the insights of the greatest
            players in history. Learning from their triumphs and challenges will
            sharpen your instincts, boost your confidence, and prepare you for
            any opponent. Whether you’re striving for mastery or simply aiming
            to improve, this is how you unlock the next level of your chess
            journey.
          </p>
        </div>

        <div className='flex justify-center'>
          <img
            src='/smart-man.png'
            alt='Smart Chess Player'
            className='w-full max-w-sm rounded-lg shadow-lg'
          />
        </div>
      </div>
      <div className='container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='flex justify-center'>
          <img
            src='/after-game-resize.png'
            alt='Aftergame Analysis'
            className='w-[450px] h-auto max-w-full rounded-lg shadow-lg'
          />
        </div>

        <div className='text-left'>
          <h1 className='text-4xl font-bold mb-6'>
            Unlock Deeper Insights with Aftergame Analysis
          </h1>
          <p className='text-lg mb-4'>
            Every game of chess is a story—a narrative filled with strategic
            triumphs, missed opportunities, and key turning points. Our
            aftergame analysis breaks your matches into digestible moments,
            pinpointing critical moves and alternative strategies you may have
            overlooked. With detailed annotations and move-by-move evaluations,
            you’ll gain a profound understanding of how the game unfolded,
            enabling you to learn from both your victories and defeats.
          </p>
          <p className='text-lg'>
            Gone are the days of generic analysis. Our system evaluates your
            unique style, strengths, and areas for improvement, offering
            actionable advice to enhance your gameplay. Whether you’re a
            beginner learning the basics or an advanced player refining your
            endgame, our aftergame analysis equips you with the knowledge you
            need to dominate your next match. This isn’t just analysis—it’s your
            gateway to becoming a more formidable player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;

