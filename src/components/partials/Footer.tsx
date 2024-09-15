import React from "react";

const Footer = () => {
  return (
    <div className="py-16 px-10 min-h-[300px] bg-zinc-950 flex justify-center text-slate-50">
      <div className="flex flex-1 max-w-[1500px]">
        <div className="flex-1 flex flex-col items-center">
          <p className="text-2xl font-semibold">Abu Sayed Polin</p>
        </div>
        <div className="flex-1 flex font-semibold justify-around">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Support</p>
              <div className="text-sm space-y-1">
                <p>FAQ</p>
                <p>Contact Us</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Support</p>
              <div className="text-sm space-y-1">
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Products</p>
            <div className="text-sm space-y-1">
              <p>Web</p>
              <p>App</p>
              <p>Software</p>
              <p>Ecommerce</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <p>Get in touch</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
