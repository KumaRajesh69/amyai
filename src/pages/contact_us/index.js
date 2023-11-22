import ContactUs from "@/components/Contact";
import AppBar from "@/components/common_components/AppBar";
import FooterPage from "@/components/common_components/Footer";
import React from "react";

function index() {
  return (
    <div>
      <AppBar />
      <ContactUs />
      <FooterPage />
    </div>
  );
}

export default index;
