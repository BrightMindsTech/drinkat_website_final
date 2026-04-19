import { useEffect, useRef, useState } from "react";

const DEFAULT_POSTER = "/featured-item1.jpeg";

type Props = {
  /** e.g. `/background-vid2.mp4` */
  src: string;
  /** Shown while loading and if playback fails (keep in /public) */
  poster?: string;
  className?: string;
};

/**
 * Background cover video tuned for mobile: lazy-starts when the parent <section> nears the
 * viewport, poster + preload strategy, play() retries (Safari / autoplay quirks), error fallback.
 */
export function SectionBackgroundVideo({
  src,
  poster = DEFAULT_POSTER,
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playbackFailed, setPlaybackFailed] = useState(false);

  useEffect(() => {
    const inner = wrapperRef.current;
    if (!inner) return;
    const section = inner.closest("section");
    if (!section) {
      setShouldLoad(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShouldLoad(true);
      },
      { root: null, rootMargin: "180px 0px 120px 0px", threshold: 0 },
    );
    io.observe(section);

    if (typeof window !== "undefined") {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      if (rect.top < vh + 200 && rect.bottom > -200) {
        setShouldLoad(true);
      }
    }

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || playbackFailed) return;
    const video = videoRef.current;
    if (!video) return;

    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.defaultMuted = true;
    video.muted = true;

    const logPlayRejection = (reason: unknown) => {
      if (import.meta.env.DEV) {
        console.warn("[SectionBackgroundVideo] play() was rejected (will retry):", reason);
      }
    };

    const tryPlay = () => {
      const p = video.play();
      if (p !== undefined) {
        p.catch((err) => {
          logPlayRejection(err);
          window.setTimeout(() => {
            video.play().catch(logPlayRejection);
          }, 350);
          window.setTimeout(() => {
            video.play().catch(logPlayRejection);
          }, 1200);
        });
      }
    };

    const onVideoError = () => {
      const err = video.error;
      if (import.meta.env.DEV && err) {
        const codes = ["", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED"];
        console.warn(
          "[SectionBackgroundVideo] Video error — falling back to poster:",
          codes[err.code] ?? err.code,
          err.message || "",
        );
      }
      setPlaybackFailed(true);
    };

    const onStalled = () => {
      video.play().catch(logPlayRejection);
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("canplaythrough", tryPlay);
    video.addEventListener("error", onVideoError);
    video.addEventListener("stalled", onStalled);

    const onVis = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("canplaythrough", tryPlay);
      video.removeEventListener("error", onVideoError);
      video.removeEventListener("stalled", onStalled);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [shouldLoad, playbackFailed]);

  const posterLayer = (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${poster})` }}
      aria-hidden
    />
  );

  return (
    <div ref={wrapperRef} className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
      {!shouldLoad || playbackFailed ? (
        posterLayer
      ) : (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disableRemotePlayback
            className="absolute inset-0 h-full w-full min-h-full min-w-full object-cover"
            aria-hidden
          />
        </>
      )}
    </div>
  );
}
