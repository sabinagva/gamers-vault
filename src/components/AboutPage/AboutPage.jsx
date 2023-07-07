import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p> Gamer's Vault is a space where gamers can store the games they played in the past and attach their memories and ratings along with it. Gamers can also share and track their game wishlist no matter what platform the game is from. </p>
      </div>
     
    </div>
  );
}

export default AboutPage;
