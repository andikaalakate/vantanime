const AudioPlayer = () => {
  return (
    <>
      <audio id="audio" autoPlay loop>
        <source src="/music/bg.ogg" type="audio/mpeg" autoPlay loop />
      </audio>
    </>
  );
};

export default AudioPlayer;
