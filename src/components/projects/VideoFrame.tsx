"use client";

import { useEffect, useRef } from "react";

interface VideoFrameProps {
  src?: string;
  poster: string;
  alt: string;
  isImageOnly?: boolean;
}

export default function VideoFrame({ src, poster, alt, isImageOnly }: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-deep2">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-line bg-white/[0.03] px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#FF6465]" />
        <span className="h-2 w-2 rounded-full bg-[#FFC02E]" />
        <span className="h-2 w-2 rounded-full bg-[#29CB5A]" />
      </div>

      <div className="relative aspect-[16/10] w-full bg-deep2">
        {isImageOnly || !src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            controls
            poster={poster}
            aria-label={alt}
            className="h-full w-full object-cover object-top"
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}
