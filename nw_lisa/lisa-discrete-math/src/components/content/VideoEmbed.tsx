interface VideoEmbedProps {
  videoId: string;
  title: string;
  timestamp?: number;
}

export function VideoEmbed({ videoId, title, timestamp }: VideoEmbedProps) {
  const src = timestamp
    ? `https://www.youtube.com/embed/${videoId}?start=${timestamp}`
    : `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="my-6">
      <h4 className="font-serif font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">
        {title}
      </h4>
      <div className="relative w-full overflow-hidden rounded-lg shadow-md" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
