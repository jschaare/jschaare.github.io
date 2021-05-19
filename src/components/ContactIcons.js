import React from 'react';

import contactInfo from '../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {contactInfo.map((s) => (
        <li key={s.label}>
            <a href={s.link} className={s.iconClass}>
                <span class="label">{s.label}</span>
            </a>
        </li>
    ))}
  </ul>
);

export default ContactIcons;