const AudioPlayer = () => {
  return (
    <>
      <audio id="audio" autoPlay loop>
        <source src="/music/bg.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default AudioPlayer;
