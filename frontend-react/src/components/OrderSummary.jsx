import PropTypes from "prop-types";
import { totalOrderValue, formatCurrency } from "../orders";

export default function OrderSummary({ orders }) {
  return (
    <div>
      <p>{orders.length} orders, total {formatCurrency(totalOrderValue(orders))}</p>
      <ul>
        {orders.map((o) => (
          <li key={o.id}>#{o.id} — {formatCurrency(o.total)} ({o.status})</li>
        ))}
      </ul>
    </div>
  );
}

OrderSummary.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, total: PropTypes.number, status: PropTypes.string })
  ).isRequired,
};
