import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="text-white p-10">
      <ContactForm />
      <div className="text-center mt-6">
        <p>© {new Date().getFullYear()} DevCoral. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
