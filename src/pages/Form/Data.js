/** @format */

import { IoEllipseOutline } from "react-icons/io5";


export const firstName = [
  {
    label: "First Name ",
    type: "text",
    placeholder:'Type here'
  },
  
];
export const lastName = [
  {
    label: "Last Name",
    type: "text",
    placeholder:'Type here'
  },
  
];

export const emailData = [
  {
    label: "Email Address",
    name: "email",
    type: "text",
    placeholder:'Type your email address here'
  },
  
];
export const passwordField  = [
  {
    label: "Password",
    name: "email",
    type: "text",
    placeholder:'Type your password here'
  },
];

export const validation = [
  {
    upperCaseCheck: "Contains at least one uppercase letter",
    characterCheck: "Contains eight characters",
    numberCheck: "Contains at least one number",
    symbolcheck: "Contains at least one symbol",
    icon: <IoEllipseOutline size={8} />,
  },
];
