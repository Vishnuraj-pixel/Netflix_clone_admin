import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Container from "../assets/styles/CreateSubscription";
import { createSubscription } from "../features/Subscription/subscriptionSlice";
import Badge from "./Badge";

function CreateSubscription() {
  const devices_can_useRef = useRef();
  const [subscription, setSubscription] = useState({
    plan: "",
    monthly_price: "",
    video_quality: "",
    resolution: "",
    devices_can_use: [],
  });
  const dispatched = useDispatch();
  const { createdSubscription, isLoading } = useSelector(
    (store) => store.subscription
  );

  const handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setSubscription({ ...subscription, [name]: value });
  };

  const add_devices = () => {
    const value = devices_can_useRef.current.value;
    if (value) {
      const filterSubscription = subscription.devices_can_use.filter(
        (devices) => devices === value
      );
      if (filterSubscription.length == 0) {
        setSubscription({
          ...subscription,
          devices_can_use: [...subscription.devices_can_use, value],
        });
        devices_can_useRef.current.value = "";
      } else {
        toast.error("Already added");
      }
    }
  };

  const remove_devices = (value) => {
    console.log(value, "valueRemove");
    if (value) {
      const filterSubscription = subscription.devices_can_use.filter(
        (device) => device != value
      );
      setSubscription({
        ...subscription,
        devices_can_use: [...filterSubscription],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      subscription.plan &&
      subscription.monthly_price &&
      subscription.video_quality &&
      subscription.resolution &&
      subscription.devices_can_use
    ) {
      const formData = new FormData();
      formData.append("plan", subscription.plan);
      formData.append("monthly_price", subscription.monthly_price);
      formData.append("video_quality", subscription.video_quality);
      formData.append("resolution", subscription.resolution);
      formData.append("devices_can_use", subscription.devices_can_use);
      dispatched(createSubscription(formData));
    }
  };
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
            value={subscription.plan}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="plan">monthly price</label>
          <input
            type="text"
            id="monthly_price"
            name="monthly_price"
            className="form-input"
            value={subscription.monthly_price}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="plan">video quality</label>
          <input
            type="text"
            id="video_quality"
            name="video_quality"
            className="form-input"
            value={subscription.video_quality}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="plan">resolution</label>
          <input
            type="text"
            id="resolution"
            name="resolution"
            className="form-input"
            value={subscription.resolution}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="plan">devices can use</label>
          <input
            type="text"
            id="devices_can_use"
            name="devices_can_use"
            className="form-input"
            ref={devices_can_useRef}
          />
        </div>
        <button
          type="button"
          className="btn btn-red mg1-bottom"
          onClick={add_devices}
        >
          Add
        </button>
        <br />
        {subscription.devices_can_use &&
          subscription.devices_can_use.length > 0 &&
          subscription.devices_can_use.map((devices, index) => {
            return (
              <Badge key={`device${index}`} remove={remove_devices}>
                {devices}
              </Badge>
            );
          })}
        <br />
        <button type="submit" className="btn btn-red btn-lrge mg2-top">
          Create
        </button>
      </form>
    </Container>
  );
}

export default CreateSubscription;
