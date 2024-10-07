import { Heading1 } from "../common/typography/Heading1";
import { Heading2 } from "../common/typography/Heading2";
import { Heading4 } from "../common/typography/Heading4";
import styles from "@/styles/animation.module.css";
import { Heading5 } from "../common/typography/Heading5";

export function Intro() {
  return (
    <div className={`text-left space-y-3 ${styles.slideIn}`}>
      <Heading1>Hello, I'm Yu Hui</Heading1>
      <Heading2>
        Software Developer | Casual Gamer | Entertainment Enthusiasist
      </Heading2>
      <Heading4>
        I'm mainly just a developer, the rest are just filler terms
      </Heading4>
      <Heading4>Rule of three y'know?</Heading4>
      <Heading5>
        But I do like kpop and anime, so we could talk about that!
      </Heading5>
    </div>
  );
}
