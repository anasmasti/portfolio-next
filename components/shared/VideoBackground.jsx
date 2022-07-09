export default function VideoBackground() {
  let backgroundPath = "/videos/hand.webm";

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full z-0 object-cover"
    >
      <source src={backgroundPath} type="video/webm" />
    </video>
  );
}
