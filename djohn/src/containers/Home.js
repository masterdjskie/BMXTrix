import React, { Component,} from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
      <h1>BMX HARDCORE TRICKS</h1>

        <h2>BMX</h2>
        <p>Sapnu Puas</p>
        <Image src={require('../assets/giphy.gif')} alt="hero-image"/>

        <h2>180 to tailwhip</h2>
        <p>you need to hop and turn your head sideward to do 180</p>
        <Image src={require('../assets/waneti.gif')} alt="hero-image"/>

        <h2>HOP TAILWHIP TO BARSPIN</h2>
        <p>you'll need to whip the frame sidewards to your side fast so you can also do the barspin</p>
        <Image src={require('../assets/TAILWHIP.gif')} alt="hero-image"/>

        <h2>DROP FLAIR 180</h2>
        <p>you'll need to full speed then hop higher to do a flair 180</p>
        <Image src={require('../assets/DROP FLAIR.gif')} alt="hero-image"/>

        <h2>FEBBLE TO 180 FEBBLE</h2>
        <p>first you need to apply the front febble then hop again todo the opposite febble</p>
        <Image src={require('../assets/FEBBLE TO FEBBLE.gif')} alt="hero-image"/>

        <h2>MOONWALK</h2>
        <p>this is a legend trick of the LODI MJ you need to handle the bars and the pot seat the do the moonwalk</p>
        <Image src={require('../assets/moonwalk.gif')} alt="hero-image"/>

        <h2>180 GAP</h2>
        <p>you need a fast pedal to do the a hop 180 spin</p>
        <Image src={require('../assets/wanetigap.gif')} alt="hero-image"/>

        <h2>BARSPIN</h2>
        <p>you need to hop and spin the bars</p>
        <Image src={require('../assets/BARSPIN.gif')} alt="hero-image"/>

        <h2>WALL RIDE FLAIR</h2>
        <p>your speed is so fast and you'll need to hop the bike at the wall and do the flair</p>
        <Image src={require('../assets/wall ride flair.gif')} alt="hero-image"/>

        <h2>WALL RIDE</h2>
        <p>your speed is so fast and you'll need to hop the bike at the wall</p>
        <Image src={require('../assets/wall ride.gif')} alt="hero-image"/>

        <h2>HOSPITAL TRICK</h2>
        <p>you need a deep breath and full of pride to do this trick,just trust on yourself</p>
        <Image src={require('../assets/hospital.gif')} alt="hero-image"/>










      </Container>
    );
  }
}
