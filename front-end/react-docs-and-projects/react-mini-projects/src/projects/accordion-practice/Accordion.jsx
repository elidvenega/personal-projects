import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [content, setShowContent] = useState(0);

  const handleContent = () => setShowContent(0);
  return (
    <>
      <Panel
        title="First Accordion"
        showContent={content === 0}
        onShow={handleContent}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ex
        sequi sit nostrum ratione quis mollitia dolor perferendis excepturi. Ad
        magnam rem optio beatae nulla voluptatem, repudiandae illum quia eius.
      </Panel>
      <Panel
        title={`Second Accordion`}
        showContent={content === 1}
        onShow={() => setShowContent(1)}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ex
        sequi sit nostrum ratione quis mollitia dolor perferendis excepturi. Ad
        magnam rem optio beatae nulla voluptatem, repudiandae illum quia eius.
      </Panel>
    </>
  );
}
