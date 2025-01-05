import Button from "../button/button";
import styles from "./contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import React, { useState } from "react";

function ContactForm() {
  const [name , setName] = useState (" abhi");
  const [email , setEmail] = useState ("  abhishekhprajpati@gmail.com");
  const [text , setText] = useState ("  kam samjhdaaar");

  const onSubmit = (event) => {
    event.preventDefault();

      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText (event.target[2].value);

    // console.log("name" ,event.target[0].value);
    // console.log("email" ,event.target[1].value);
    // console.log("text" ,event.target[2].value);
 
  }
    const onViaCallSubmit = () => {
      console.log ("i am from call");
    }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
          onClick = {onViaCallSubmit}
          text="VIA CALL  " icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM "
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON " />
          </div>
          <div>
            {
              name +  " " + email + " " + text
            }
          </div>
        </form>
      </div>
      <div className={styles.contactformImage}>
        <img src="/images/contact.svg" alt="contactimage" />
      </div>
    </section>
  );
}

export default ContactForm;
