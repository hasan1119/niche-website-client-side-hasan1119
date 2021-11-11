import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(orders);

  useEffect(() => {
    fetch(`https://rocky-cliffs-16368.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  const deletion = (id) => {
    Swal.fire({
      title: "Are you sure to delete this order?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://rocky-cliffs-16368.herokuapp.com/placeorder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const modifiedOrders = orders.filter((order) => order._id !== id);
              setOrders(modifiedOrders);
              Swal.fire("Deleted!", "", "success");
            }
          });
      }
    });
  };

  return (
    <div className="px-2  mx-md-2 bg-white" style={{ borderRadius: "15px" }}>
      <h3 className="text-center mb-4">Manage all orders</h3>
      {loading ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Table hover borderless responsive>
          <Toaster position="bottom-left" reverseOrder={false} />
          <thead className="bg-light">
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Brands</th>
              <th>Status</th>
              <th>Deletion</th>
            </tr>
          </thead>
          {orders.map((order) => {
            return (
              <tbody key={order._id} style={{ fontWeight: "500" }}>
                <tr>
                  <td>
                    <img width="100px" src={order.img} alt="" />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.desc}</td>

                  <td>
                    <button
                      style={{ width: "100px" }}
                      className={
                        order.status === "Pending"
                          ? "btn btn-danger"
                          : order.status === "Done"
                          ? "btn btn-success"
                          : "btn btn-info"
                      }
                    >
                      {order.status}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deletion(order._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      )}
    </div>
  );
};

export default Orders;
