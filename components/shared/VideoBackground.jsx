export default function VideoBackground() {
  let backgroundPath = "/videos/hand.mp4";

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full z-0 object-cover"
    >
      {/* <source src={backgroundPath} type="video/webm" /> */}
      <source src={backgroundPath} type="video/mp4" />
    </video>
  );
}
