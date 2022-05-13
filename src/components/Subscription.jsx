import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "../assets/styles/Subscription";
import Loading from "./Loading";

const Subscription = () => {
  const { subscriptionList, isLoadingForGetAllSubscription } = useSelector(
    (store) => store.subscription
  );
  useEffect(() => {
    console.log(subscriptionList);
  }, [subscriptionList]);

  if (isLoadingForGetAllSubscription) {
    return <Loading />;
  }

  if (subscriptionList.length === 0) {
    return <span>No record</span>;
  }

  return (
    <div>
      <Table className="subscriptionPlanTable">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Mothly Price</th>
            <th>Video Quality</th>
            <th>Resolution</th>
            <th>Devices can use</th>
            <th>Subscribed users</th>
          </tr>
        </thead>
        <tbody>
          {subscriptionList &&
            subscriptionList.length > 0 &&
            subscriptionList.map((subscription) => {
              return (
                <tr key={subscription._id}>
                  <td>{subscription.plan}</td>
                  <td>{subscription.monthly_price}</td>
                  <td>{subscription.video_quality}</td>
                  <td>{subscription.resolution}</td>
                  <td>{subscription.devices_can_use[0]}</td>
                  {subscription.subscribedUsers.length === 0 && <td>null</td>}
                  {subscription.subscribedUsers > 0 &&
                    subscription.subscribedUsers.map((users) => {
                      return (
                        <td key={users._id}>
                          list of users
                          <ul>
                            <li>{users.name}</li>
                          </ul>
                        </td>
                      );
                    })}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Subscription;
