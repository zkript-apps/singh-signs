import React from "react";

const Header = ({ title, root }: { title: string; root: string }) => {
  return (
    <div className="bg-[url('/img/front-bg-photo.png')] py-20 px-6 xl:px-80">
      <div className="h-60 flex flex-col items-start justify-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
          {title}
        </h2>
        <p className="font-medium text-shady-white">
          <span className="text-giants-orange">{root}</span> / {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
