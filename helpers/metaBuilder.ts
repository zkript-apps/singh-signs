export function metaBuilder({
  title,
  description,
  imgUrl,
  imgWidth,
  imgHeight,
}: {
  title: string;
  description: string;
  imgUrl?: string;
  imgWidth?: string | number;
  imgHeight?: string | number;
}) {
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${process.env.NODE_ENV === "production"
          ? "https://singh-signs.vercel.app" // <-- change this to prod deployment url
          : "http://localhost:3000"
        }`,
      siteName: "Singh Signs Company",
      images: [
        {
          url: imgUrl ? imgUrl : `${process.env.NODE_ENV === "production"
              ? "https://singh-signs.vercel.app" // <-- change this to prod deployment url
              : "http://localhost:3000"
            }/img/singhsignsMetadata.png`,
          width: imgWidth ? imgWidth : "1920",
          height: imgHeight ? imgHeight : "1080",
        },
      ],
      locale: "en-US",
      type: "website",
    },
  };
}
