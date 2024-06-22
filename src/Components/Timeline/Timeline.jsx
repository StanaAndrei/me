// src/components/Timeline.tsx
import "./Timeline.scss";

const timelineData = [
  { date: "2024-01-01", title: "New Year", content: "Celebration of the new year." },
  { date: "2024-02-14", title: "Valentine's Day", content: "A day for love and friendship." },
  // Add more events as needed
];

const Timeline = () => {
  return (
    <div class="timeline">
      {timelineData.map((event) => (
        <div class="timeline-item">
          <div class="timeline-date">{event.date}</div>
          <div class="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
