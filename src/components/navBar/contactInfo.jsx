import React from 'react';
import { GrPhone } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';

const ContactInfo = () => {
  return (
    <span className="nav-link ml-2">
      <p>
        <GrPhone /> +44 0000000000
      </p>
      <p>
        <HiOutlineMail /> example@me.com
      </p>
    </span>
  );
};

export default ContactInfo;
