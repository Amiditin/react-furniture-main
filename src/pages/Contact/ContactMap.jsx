import React from 'react';

function ContactMap() {
  return (
    <div className="map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A4dc9d550ca8738db352ed52b57f6ff04b99417ee2a1146ec96014807e747dad9&amp;source=constructor"
        title="HSE map"
        width="100%"
        height="580"
        frameBorder="0"></iframe>
    </div>
  );
}

export default ContactMap;
