import { Briefcase } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements } from "./data";

export function Timeline() {
  return (
    <div>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              iconStyle={{
                backgroundColor: "slateblue",
                alignContent: "center",
                textAlign: "center",
              }}
              iconClassName="py-8"
              contentStyle={{
                backgroundColor: "#22333b",
                padding: "20px",
              }}
              contentArrowStyle={{
                borderRightColor: "#22333b",
              }}
              icon={<Briefcase />}
            >
              <h3 className="heading">{element.title}</h3>
              <h5 className="subHeading">{element.location}</h5>
              <p className="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
