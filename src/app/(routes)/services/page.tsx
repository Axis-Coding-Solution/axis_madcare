import React from "react";
import Header from "@/app/(routes)/_components/services/header";
import Ehrinfo from "@/app/(routes)/_components/services/ehrinfo";
import Epricing from "../_components/services/epricing";
import Inter from "../_components/services/inter";


const page = () => {
  return (
    <>
  <Header />
  <Ehrinfo/>
  <Epricing/>
  <Inter/>
  </>
  );
};

export default page;
