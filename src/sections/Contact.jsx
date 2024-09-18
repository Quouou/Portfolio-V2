import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    emails: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const sanitizeInput = (input) => input.replace(/<[^>]*>/g, "");

    const sanitizedForm = {
      name: sanitizeInput(form.name),
      email: sanitizeInput(form.email),
      message: sanitizeInput(form.message),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: sanitizedForm.name,
          to_name: "Christopher",
          message: sanitizedForm.message,
          from_email: sanitizedForm.email,
          to_email: "benedictochristopher31@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      alert("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      console.log(e);
      alert("Something went wrong");
    }
  };

  return (
    <section id="Contact" className="c-space my-20">
      <div className="contact-container">
        <h3 className="head-text">Contact Me</h3>
        <p className="text-lg text-white-600 mt-3">
          Feel free to reach out to me for collaborations, freelance projects,
          or if you have any questions. You can contact me via email at
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col space-y-7"
        >
          <label className="space-y-3">
            <span className="field-label">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="lorem"
            />
          </label>

          <label className="space-y-3">
            <span className="field-label">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="lorem@gmail.com"
            />
          </label>

          <label className="space-y-3">
            <span className="field-label">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="field-input"
              placeholder="Hi there! I'd like to ..."
            />
          </label>

          <button className="field-btn" type="submit" disabled={loading}>
            {loading ? "Sending" : "Send"}
            <img
              src="/assets/arrow-up.png"
              alt="arrow-up"
              className="field-btn_arrow"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
