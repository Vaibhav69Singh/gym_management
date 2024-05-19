import React from "react";

const Location = () => {
  return (
    <div className="location-holder">
      <div className="location-name">
        <h2>Fitness Point</h2>
      </div>
      <div className="map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14877.67161286413!2d81.30693069591794!3d21.215270782529554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293dba7ba2cd67%3A0x12a9a5492b25d91a!2sFitness%20Point!5e0!3m2!1sen!2sin!4v1713875935666!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Location;
