import classes from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={classes.main}>
      <h3>SUPPORT</h3>
      <div>Phone us @ 0120-484-2200</div>
      <div>
        Mail us @ <a href="''">reactAuthsite.com </a>
      </div>
    </div>
  );
};

export default ContactPage;
