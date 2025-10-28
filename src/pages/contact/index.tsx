import AvailabilityDisplay from "../../components/availabilityDisplay";
import ContactForm from "../../components/contactForm";

export default function Contact() {
  return (
    <div className="contactPage">
      <AvailabilityDisplay />
      <div className="contactFormContainer">
        <ContactForm />
      </div>
    </div>
  );
}
