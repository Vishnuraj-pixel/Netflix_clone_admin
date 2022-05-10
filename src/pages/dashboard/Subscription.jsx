import React from "react";
import CreateSubscription from "../../components/CreateSubscription";
import SubscriptionList from "../../components/SubscriptionList";

function Subscription() {
  return (
    <div className="flex-box">
      <SubscriptionList />
      <CreateSubscription />
    </div>
  );
}

export default Subscription;
