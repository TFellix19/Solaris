import { useState } from "react";

export default function Gloadingimages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-2 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-full md:w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
              src="https://i.imgur.com/KJAYElZ.png"
              onClick={() => handleImageClick('https://i.imgur.com/KJAYElZ.png')}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
              src="https://i.imgur.com/sIptuf1.png"
              onClick={() => handleImageClick('https://i.imgur.com/sIptuf1.png')}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
              src="https://i.imgur.com/qcDSONW.png"
              onClick={() => handleImageClick('https://i.imgur.com/qcDSONW.png')}
            />
          </div>
        </div>
        <div className="flex w-full md:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
              src="https://i.imgur.com/Ygpa0En.png"
              onClick={() => handleImageClick('https://i.imgur.com/Ygpa0En.png')}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
              src="https://i.imgur.com/501EIMW.png"
              onClick={() => handleImageClick('https://i.imgur.com/501EIMW.png')}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
              src="https://i.imgur.com/501EIMW.png"
              onClick={() => handleImageClick('https://i.imgur.com/501EIMW.png')}
            />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={handleCloseModal}>
          <div className="relative max-w-full max-h-full">
            <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full" />
            <button onClick={handleCloseModal} className="absolute top-0 right-0 mt-2 mr-2 text-white">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
