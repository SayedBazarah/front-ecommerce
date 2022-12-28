import Image from "next/image";
import Style from "./contacts.module.css";
import Form from "./form";
import Hero from "../common/Hero";
const ContactsComponents = () => {
  return (
    <>
      {/* <Hero title="Contact us" img="/contacts/hero.avif" /> */}

      <div className={Style.overlay}>
        <div className={Style.title}>
          <h1> Contcat Us</h1>
        </div>
      </div>

      <div className={Style.map}>
        <h3 className="m-4">OUR LOCATION</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
          width="100%"
          height="300"
          frameborder="0"
        ></iframe>
      </div>

      <section className={Style.container}>
        <div className={Style.info}>
          <div>
            <h3>Headquarters</h3>
            <p>
              ECOMMERCE Studio
              <br />
              25th ring road
              <br />
              Cairo, Egypt
            </p>
          </div>
          <div>
            <h3>Collaborations</h3>
            <p>
              Reach out to collaborate at <br />
              <a href="mailto:collaborate@ecommerce.com">collab@domain.com</a>
            </p>
          </div>
        </div>
        <div className={Style.form}>
          <h3>Inquiries</h3>
          <Form />
        </div>
      </section>
    </>
  );
};

export default ContactsComponents;
