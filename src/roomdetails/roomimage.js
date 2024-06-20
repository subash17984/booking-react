import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
const Roomimage = () => {
    return (
      <>
        <MDBCarousel
          showIndicators
          showControls
          fade
          className="col"
          style={{ width: "100%", height: "350px" }}
        >
          {/* {userList.map(usr=>{})} */}
          <MDBCarouselItem
            style={{ width: "100%", height: "350px" }}
            className="w-100   d-block"
            itemId={1}
            src="https://www.diybunker.com/wp-content/uploads/2021/09/home-5-1024x751.jpg"
            alt="..."
          ></MDBCarouselItem>

          <MDBCarouselItem
            style={{ width: "100%", height: "350px" }}
            className="w-100 d-block"
            itemId={2}
            src="https://www.diybunker.com/wp-content/uploads/2021/09/home-2-1024x751.jpg"
            alt="..."
          ></MDBCarouselItem>

          <MDBCarouselItem
            style={{ width: "100%", height: "350px" }}
            className="w-100 d-block"
            itemId={3}
            src="https://www.diybunker.com/wp-content/uploads/2021/09/home-10.jpg"
            alt="..."
          ></MDBCarouselItem>
        </MDBCarousel>
      </>
    );
}

export default Roomimage
