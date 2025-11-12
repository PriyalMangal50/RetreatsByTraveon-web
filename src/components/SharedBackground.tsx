import { images } from '../assets';

export default function SharedBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        /* place the background well beneath page content and overlays */
        zIndex: -50,
        /* ensure it doesn't intercept pointer/gesture events */
        pointerEvents: 'none',
        /* Use cover and center so it fills the viewport nicely */
        backgroundImage: `url(${images.hero.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        /* keep background stationary relative to viewport (safer on some browsers)
           and avoid transform-based layout surprises */
        backgroundAttachment: 'fixed'
      }}
    />
  );
}