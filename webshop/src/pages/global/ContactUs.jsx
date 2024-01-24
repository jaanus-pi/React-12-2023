import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { Button, TextField } from '@mui/material';

export const ContactUs = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zb44adv', 'template_t20l13f', form.current, 'dUtQ84Svgf3DLwnyL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>{t("name")}</label> <br />
      <input type="text" name="from_name" /> <br /> */}
      <br /> <TextField label={t("name")} variant="outlined" name="from_name" /> <br /> <br />
      <br /> <TextField label="E-mail" variant="outlined" name="from_email" /> <br /> <br />
      <br /> <TextField label={t("message")} variant="outlined" name="message" /> <br /> <br />
      <Button type="submit" variant="outlined">{t("send")}</Button>
      {/* <label>E-mail</label> <br />
      <input type="email" name="from_email" /> <br /> */}
      {/* <label>{t("message")}</label> <br />
      <textarea name="message" /> <br /> */}
      {/* <input type="submit" value={t("send")}/><br /> */}
    </form>
  );
};
