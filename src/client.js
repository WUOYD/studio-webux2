import {Howl, Howler} from 'howler';
import { io } from  'socket.io-client'

export const socket = io(window.location.hostname + ':3000');

export function sequencer(){
    while (true){
      while($status=="play"){
          for (let i = 0; i < 8; i++) {
              $track.forEach(ele => {
                console.log(ele)
              });
          }  
      }
      while(this.$status=="stop"){}
    }
  }

socket.on('broadcastT1', (index) => {
  
})
  
  var sound1 = new Howl({
    src: ['../src/sounds/bd.wav'],
    volume: 0.5
  });
  var sound2 = new Howl({
    src: ['../src/sounds/sd.wav'],
    volume: 0.5
  });
  var sound3 = new Howl({
    src: ['../src/sounds/ch.wav'],
    volume: 0.5
  });
  var sound4 = new Howl({
    src: ['../src/sounds/cb.wav'],
    volume: 0.5
  });
  var sound5 = new Howl({
    src: ['../src/sounds/cb.wav'],
    volume: 0.5
  });
  var sound6 = new Howl({
    src: ['../src/sounds/cb.wav'],
    volume: 0.5
  });
  