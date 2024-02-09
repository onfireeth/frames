import { FrameMetadataType, getFrameHtmlResponse } from '@coinbase/onchainkit';

export function getFrameHtml(frameMetadata: FrameMetadataType) {
  const html = getFrameHtmlResponse(frameMetadata);

  const extraTags = [
    '<meta property="og:title" content="Farcaster: Pioneers">',
    '<meta property="og:description" content="Pioneers">',
    '<meta property="og:image" content="https://zora.co/collect/base:0xb71124ba2a14ab279223492cd9065c6e6aaabfa1/2">',
    '<meta property="fc:frame:image:aspect_ratio" content="1:1" />',
  ];
  // hack: remove close tags, add aspect ratio and required OG tags
  return `${html.slice(0, html.length - 14)}${extraTags.join('')}</head></html>`;
}
