import { path, env } from '../configs/cdn.json';

interface GetImageSrcOptions {
  srcVersion: string;
  srcId: string;
  extension: 'PNG' | 'WEBP';
}

export function getImageSrc({ srcVersion, srcId, extension }: GetImageSrcOptions): string {
  return `${path}/${env}/image/upload/${srcVersion}/${srcId}.${extension}`;
}
