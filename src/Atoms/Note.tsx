import Accordion from "react-bootstrap/Accordion";
import { NotesType } from "../redux/notesSlice";

export default function Note(props: NotesType) {
   const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));

  return formattedDate;
};

    const customDate = formatDate(props.date)

  return (
    <Accordion style={{ maxWidth: "40%", margin: "1rem auto" }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              width: '100%'
            }}
          >
            <h4 style={{ marginBottom: "0", fontSize: '1.2rem', maxWidth: '60%' }}>{props.title}</h4>
            <p style={{ marginBottom: "0", marginRight: '.5rem', fontSize: '.9rem' }}>{customDate}</p>
          </div>
        </Accordion.Header>
        <Accordion.Body>{props.note}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
