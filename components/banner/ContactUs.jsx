import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const ContactUs = () => {
  const pathname = usePathname();

  return (
    <div className="fancy-short-banner-sixteen mt-130 lg-mt-80 wow fadeInUp">
      <div className="container">
        <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
          <div className="row">
            <div className="col-xl-10 col-md-11 m-auto">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="text-wrapper text-center text-lg-start md-pb-30">
                 
                    <p className="main-title fw-500 text-white m0">
                      {pathname.startsWith("/en")
                        ? "Contact us today!"
                        : " Vegye fel velünk a kapcsolatot még ma! "}
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 ms-auto text-center text-lg-end">
                  <Link
                    href={
                      pathname.startsWith("/en") ? "/en/contact" : "/kapcsolat"
                    }
                    className="btn-twentyOne fw-500 tran3s"
                  >
                    {pathname.startsWith("/en") ? "contact" : "kapcsolat"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
