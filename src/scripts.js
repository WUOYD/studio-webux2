import {Howl, Howler} from 'howler';


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


export function sequencer(){
    while(this.$status=="play"){
        for (let i = 0; i < 8; i++) {
            for (let j = 1; j < 7; j++) {
                if(this.$tracks.get("track"+j)[i]=true){
                    let soundCounter = "sound"+j
                    soundCounter.play();
                }
            } 
        }  
    }
    while(this.$status=="stop"){
    }
}
