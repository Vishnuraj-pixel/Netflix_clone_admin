import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../assets/styles/SubscriptionList";
import { getAllSubscription } from "../features/Subscription/subscriptionSlice";
import Loading from "./Loading";
import SubscribedUsersList from "./SubscribedUsersList";
import Subscription from "./Subscription";

function SubscriptionList() {
  const dispatched = useDispatch();
  const { createdSubscription } = useSelector((store) => store.subscription);
  useEffect(() => {
    dispatched(getAllSubscription());
  }, [createdSubscription]);

  return (
    <Container>
      <Subscription />
      <SubscribedUsersList />
    </Container>
  );
}

export default SubscriptionList;
