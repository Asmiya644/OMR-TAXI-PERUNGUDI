"use client";

import React from "react";
import { Phone } from "lucide-react";

export default function MobileFloatingBar() {
  return (
    <aside
      aria-label="Quick mobile booking actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-taxi-black p-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href="tel:+919176206996"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-taxi-yellow active:bg-taxi-yellow-hover text-taxi-black font-black text-sm border-2 border-taxi-black shadow-md min-h-[50px] transition-transform active:scale-95"
          aria-label="Call Dispatch"
        >
          <Phone className="w-5 h-5 stroke-[2.5]" />
          <span>Call Dispatch</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I would like to book a taxi ride.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] active:bg-[#20ba59] text-white font-black text-sm border-2 border-black/20 shadow-md min-h-[50px] transition-transform active:scale-95"
          aria-label="Book on WhatsApp"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.289.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2 1.045.932 1.353 1.002 1.545 1.097.192.096.303.083.417-.048.115-.13.491-.572.622-.767.13-.195.26-.163.433-.099.173.065 1.097.517 1.285.611.188.094.313.14.36.219.046.079.046.458-.098.863z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
