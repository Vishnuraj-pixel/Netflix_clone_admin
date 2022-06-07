import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SubscribedUser from "./SubscribedUser";

const SubscribedUsersList = () => {
  const { subscriptionList } = useSelector((store) => store.subscription);

  return (
    <Container>
      <h1 className="heading">list of users</h1>
      <SubscribedUser />
      {subscriptionList &&
        subscriptionList.length > 0 &&
        subscriptionList.map((plan) => {
          return (
            <div key={plan._id}>
              <h3>Plan: {plan.plan}</h3>
            </div>
          );
        })}
      <SubscribedUser />
    </Container>
  );
};

export default SubscribedUsersList;

const Container = styled.section`
  .heading {
    text-align: center;
    font-size: 20px;
    margin-bottom: 1rem;
  }
`;
