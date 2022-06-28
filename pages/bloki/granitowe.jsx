import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import ModalImage from "react-modal-image";

const Blocks = () => {
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Bloki i bryły: granitowe
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Oferujemy dla zakładów kamieniarskich i klienta indywidualnego
              bloki i bryły z granitu czerwonego i czarnego, dostępne w trzech
              klasach jakościowych. Wszelkie szczegóły dotyczące zakupu i
              dostawy bloków można uzyskać kontaktując się z nami telefonicznie
              lub mailowo.
              <br />
              <br />
              <span className="font-bold">Dostepne kolory:</span> czerwony,
              czarny, brązowy, szary
            </p>
          </div>
        </div>
        <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 mb-8">
          <div class="w-full rounded">
          <ModalImage
              small="/image/bloki/blok1.jpeg"
              large="/image/bloki/blok1.jpeg"
              alt="Blok granitowy"
            />
          </div>
          <div class="w-full rounded">
          <ModalImage
              small="/image/bloki/blok2.jpeg"
              large="/image/bloki/blok2.jpeg"
              alt="Blok granitowy"
            />
          </div>
          <div class="w-full rounded">
          <ModalImage
              small="/image/bloki/blok3.jpeg"
              large="/image/bloki/blok3.jpeg"
              alt="Blok granitowy"
            />
          </div>
          <div class="w-full rounded">
          <ModalImage
              small="/image/bloki/blok4.jpeg"
              large="/image/bloki/blok4.jpeg"
              alt="Blok granitowy"
            />
          </div>
          <div class="w-full rounded">
          <ModalImage
              small="/image/bloki/blok5.jpeg"
              large="/image/bloki/blok5.jpeg"
              alt="Blok granitowy"
            />
          </div>
          <div class="w-full rounded">
          <ModalImage
              small="/image/bloki/blok6.jpeg"
              large="/image/bloki/blok6.jpeg"
              alt="Blok granitowy"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blocks;
