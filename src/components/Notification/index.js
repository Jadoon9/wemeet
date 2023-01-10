import React from "react";
import { Helmet } from "react-helmet";
import MainPageLayout from "../MainPageLayout/MainPageLayout";
import NotificationItem from "./NotificationItem";

const index = () => {
  return (
    <>
      <MainPageLayout
        title="Notifications"
        breadcrum1="Dashboard"
        breadcrum2="Notifications"
        cardTitle="Notifications Card"
        link1="/"
        link2="/notifications"
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard | Notifications</title>
          <meta
            name="description"
            content="Notifications component with cards  "
          />
        </Helmet>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Notifications</h4>

              <NotificationItem
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXD1SPSNpNbZb0VM_sdy9hUctygrX3alTOn3MCycfeFA&s"
                name="Scot Adkins"
                message="Team A Meeting 9:15 AM"
                time="9:00 am"
              />
              <NotificationItem
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXD1SPSNpNbZb0VM_sdy9hUctygrX3alTOn3MCycfeFA&s"
                name="Shahzeb Jadoon"
                message="Team A Meeting 9:15 AM"
                time="10:00 am"
              />
              <NotificationItem
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXD1SPSNpNbZb0VM_sdy9hUctygrX3alTOn3MCycfeFA&s"
                name="Team A"
                message="Team A Meeting 9:15 AM"
                time="11:00 am"
              />
            </div>
          </div>
        </div>
      </MainPageLayout>
    </>
  );
};

export default index;
