import sendMail from "../../emails";

export default function Home() {
  const breakMeNow = sendMail;
  return JSON.stringify(breakMeNow);
}
