import React from "react";
import Phases from "@/components/phases";
import styles from "@/styles/web.module.css";
import PricingCard from "@/components/Pricecard";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">SEO</h1>
      </div>
      <div className="flex mt-10 max-lg:flex-col max-lg:items-center ">
        <div className="w-1/2 rounded-lg max-lg:w-11/12 ">
          {/* <img src="./web.jpg" alt="" className={styles.img} /> */}
        </div>
        <div className="w-1/2 mt-4">
          <Phases
            title1="Website Audit"
            title2="Keyword Analysis"
            title3="Website Analysis"
            title4="Backlink Analysis"
            title5="Content Optimization"
            title6="Directories and Citations"
          ></Phases>
        </div>
      </div>
      <div className="flex items-center justify-center m-10">
        <h1 className="text-6xl text-black">Our Pricing</h1>
      </div>
      <PricingCard
        cust1="Ideal for a small team."
        cust2="Ideal for individual developers."
        cust3="For large bussiness"
        price1="$499/monthh"
        price2="$699/month"
        price3="$899/month"
        bl1="Standard SEO audit and implementation"
        bl2="Analytics integration and basic monitoring"
        bl3="Keyword optimization for up to 20 pages"
        bl4="Quarterly reports and feature updates"
        bl5="Email and chat support during business hours"
        bl6="Onboarding and training resources"
        ml1="Advanced SEO audit, strategy, and implementation"
        ml2="Enhanced analytics with A/B testing capabilities"
        ml3="Keyword optimization for up to 30 pages"
        ml4="Regular monitoring, vulnerability assessments, and malware removal"
        ml5="Bi-annual feature updates and industry trend reports"
        ml6="Access to exclusive webinars and training sessions"
        ml7="Priority support with a 48-hour response time"
        pl1="Comprehensive SEO audit and strategy"
        pl2="Advanced analytics integration and continuous monitoring"
        pl3="Keyword research and optimization for unlimited pages"
        pl4="Monthly reports and performance reviews"
        pl5="Dedicated account manager and strategic SEO consultation"
        pl6="Priority support with a 24-hour response time"
      ></PricingCard>
    </>
  );
};

export default page;