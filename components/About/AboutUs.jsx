import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ScanStone
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed">Scanstone działa na polskim rynku od 2009 roku i specjalizuje się w produkcji kolorowej kostki brukowej z
       naturalnych kamieni skandynawskich (Szwed, Vanga, Bohus, Gnejs), które dzięki wyjątkowej kolorystyce i fakturze posiadają unikalne walory estetyczne.
       <br/><br/>
       Wieloletnia współpraca z zagranicznymi zakładami wydobycia kamienia sprawia, że możemy naszym Klientom zaoferować konkurencyjne ceny na produkty o najwyższym stopniu jakości. Atrakcyjna oferta pozwala nam na systematyczny rozwój przedsiębiorstwa
        poprzez ciągłe powiększanie grona stałych i zadowolonych odbiorców naszych produktów.</p>
      <div class="flex justify-center">
        <Link href="/contact">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Skontaktuj się</button>
        </Link>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" width="720px" height="600px" alt="hero" src="/image/firma.jpeg"/>
    </div>
  </div>
</section>
  );
};

export default AboutUs;
