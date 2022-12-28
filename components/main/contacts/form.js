import Style from "./form.module.css";

const Form = () => {
  return (
    <form className={Style.container}>
      <div>
        <label>Name*</label>
        <input type="text" placeholder="Your name" required />
      </div>
      <div>
        <label>Email*</label>
        <input type="email" placeholder="Your email" required />
      </div>
      <div>
        <label>Phone</label>
        <input type="number" placeholder="Your phone" />
      </div>
      <div>
        <label>Message*</label>
        <textarea
          rows="5"
          cols="33"
          type="text"
          placeholder="Write your message here."
          required
        />
      </div>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default Form;
