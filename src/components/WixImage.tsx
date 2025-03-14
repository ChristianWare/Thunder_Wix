/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes } from "react";
import { media as wixMedia } from "@wix/sdk";

type WixImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height" | "alt"
> & {
  mediaIdentifier: string | undefined;
  placeholder?: string;
  alt?: string | null | undefined;
} & (
    | {
        scaletofill?: true;
        width: number;
        height: number;
      }
    | {
        scaletofill: false;
      }
  );

export default function WixImage({
  mediaIdentifier,
  placeholder = "/placeholder.png",
  alt,
  scaletofill,
  ...props
}: WixImageProps) {
  // Extract width and height from props to avoid passing scaletofill to the img element
  const { width, height, ...restProps } = props as any;

  const imageUrl = mediaIdentifier
    ? scaletofill || scaletofill === undefined
      ? wixMedia.getScaledToFillImageUrl(mediaIdentifier, width, height, {})
      : wixMedia.getImageUrl(mediaIdentifier).url
    : placeholder;

  return (
    <img
      src={imageUrl}
      alt={alt || ""}
      width={width}
      height={height}
      {...restProps}
    />
  );
}
