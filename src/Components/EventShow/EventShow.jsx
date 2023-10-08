

const EventShow = () => {
    return (
        <div className="mb-4">

            <h1 className="text-center text-rose-500 font-bold text-3xl mt-10 ">
            Stunning Event Decorations
                 </h1>
                 <p className="text-center font-semibold mt-3">Witness the Magic of Our Spectacular Decorations</p>
           <div className="mt-9 ml-3 md:ml-20 lg:ml-56 mx-auto">

           <div className="carousel w-[400px] h-[160px] md:w-[620px] md:h-[200px] lg:w-[800px] lg:h-[400px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSi4VKk3NMbmWvNKU9TrG0iIqFv_VkVsT3RhPFP6BwIdKEiyU5FC_R6iCcaM_E2Mh-3Sg&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hoYp9A29RkqFRedxMn6JFJRWQNHPSoTOvTBkMT9C_svp3K5JLda4a6tCNt4Fh_fK15M&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrveU8Fc27DAH-dCvkK58ZKIx8dk5IFncMg&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdvAA4HKdSQKm93L38H2sEbT6I3zkJsoYmg&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            
            </div> 
        </div>
    );
};

export default EventShow;