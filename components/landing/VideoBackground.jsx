export default function VideoBackground() {
  let backgroundPath = "/images/landing/background/background.webm";

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
