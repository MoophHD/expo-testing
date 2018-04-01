import AudioManager from './AudioManager';

const sounds = {
  "bg": require("./music.mp3")
}
const MusicManager = new AudioManager(sounds);
MusicManager.loadAudio().then(() => {console.log("loaded")});

export default MusicManager;