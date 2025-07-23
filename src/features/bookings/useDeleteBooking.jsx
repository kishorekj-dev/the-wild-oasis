import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteBook, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => {
      deleteBooking(bookingId);
    },

    onSuccess: () => {
      toast.success("Booking successfully deleted");

      navigate("/bookings");
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("Error deleting booking. Please try again later.");
    },
  });

  return { deleteBook, isDeleting };
}
