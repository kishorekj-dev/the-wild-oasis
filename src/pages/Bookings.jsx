import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BoookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BoookingTable />
    </>
  );
}

export default Bookings;
