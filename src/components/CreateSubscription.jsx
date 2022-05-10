import { useEffect, useRef, useState } from "react";
import Container from "../assets/styles/CreateSubscription";

function CreateSubscription() {
  const [value, setValue] = useState({
    plan: "",
    monthly_price: "",
    video_quality: "",
    resolution: "",
    devices_can_use: [],
  });

  const handleSubmit = () => {};
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="plan">plan</label>
          <input
            type="text"
            id="plan"
            name="plan"
            className="form-input"
            value={value.plan}
          />
        </div>
        <div className="form-row">
          <label htmlFor="plan">monthly price</label>
          <input
            type="text"
            id="monthly_price"
            name="monthly_price"
            className="form-input"
            value={value.monthly_price}
          />
        </div>
        <div className="form-row">
          <label htmlFor="plan">video quality</label>
          <input
            type="text"
            id="video_quality"
            name="video_quality"
            className="form-input"
            value={value.video_quality}
          />
        </div>
        <div className="form-row">
          <label htmlFor="plan">resolution</label>
          <input
            type="text"
            id="resolution"
            name="resolution"
            className="form-input"
            value={value.resolution}
          />
        </div>
        <div className="form-row">
          <label htmlFor="plan">devices can use</label>
          <input
            type="text"
            id="devices_can_use"
            name="devices_can_use"
            className="form-input"
            value={value.devices_can_use[value.devices_can_use.length - 1]}
          />
        </div>
        <input type="submit" className="btn btn-red btn-lrge" />
      </form>
    </Container>
  );
}

export default CreateSubscription;
