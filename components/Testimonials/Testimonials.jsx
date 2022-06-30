const Testimonials = () => {
  return (
    <>
      <div class="mb-8 text-center">
        <h2 class="text-4xl font-bold text-indigo-600">
          Co nasi klienci o nas mówią?
        </h2>
        <p class="text-lg text-gray-600">What others say about us</p>
      </div>
      <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
        <div class="p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Polecam. Zaladunek i papiery w moment.  Wjazd do firmy między dino  sklep a torowiskiem "
            </p>
            <div class="flex flex-col items-center justify-center">

              <h5 class="font-bold text-indigo-600 mt-12">Marek Rutz</h5>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Bardzo dobra jakość czarnej kostki, szybkość realizacji zamówienia, bezproblemowy kontakt. Ogólnie polecam. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <h5 class="font-bold text-indigo-600 mt-6">daniel.</h5>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-800 rounded-lg shadow-md">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-indigo-600">michael james</h5>
              <p class="text-sm text-gray-600">web developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
