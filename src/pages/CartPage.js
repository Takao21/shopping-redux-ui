import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeLastItem } from "../redux_actions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TAX_RATE = 0.05;

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: "calc(100% - 109px)",
    marginLeft: "83px",
  },
  table: {
    maxWidth: "100%",
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(unit) {
  return 1 * unit;
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const addTax = (total) => {
  return TAX_RATE * total;
};

const invoiceTotal = (subtotal) => {
  return addTax(subtotal) + subtotal;
};

export const CartPage = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.updateCartReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="mt-5">My Cart</h1>

      <button onClick={() => dispatch(addToCart())}>Add to Cart</button>
      <button onClick={() => dispatch(removeLastItem())}>
        Remove Last Item
      </button>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table
          className={classes.table}
          aria-label="spanning table"
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">{"$ " + item.price}</TableCell>
                <TableCell align="right">
                  {"$ " + ccyFormat(priceRow(item.price))}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">
                {"$ " + ccyFormat(subtotal(cart))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">
                {"$ " + ccyFormat(addTax(subtotal(cart)))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {"$ " + ccyFormat(invoiceTotal(subtotal(cart)))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
