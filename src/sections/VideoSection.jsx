/** @jsxImportSource @emotion/react */
import { videoSectionCopy } from 'assets';
import { ScrollSnapSection } from 'components';

const VideoSection = () => (
  <ScrollSnapSection>
    <p>{videoSectionCopy.description}</p>
    <iframe
      width="560"
      height="315"
      src={videoSectionCopy.video.source}
      title={videoSectionCopy.video.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </ScrollSnapSection>
);

export default VideoSection;
