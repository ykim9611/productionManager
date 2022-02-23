/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";
import ProductionItem from "./ProductionItem.jsx";

const ProductionList = ({ list, getAll }) => (
  <div>
    <h2>
      Open Production Runs
      <div>* EDD: Estimated Delivery Date</div>
    </h2>
    <div>
      {list.map((item) =>
        item.openBool === 1 ? (
          <ProductionItem
            key={item.id.toString()}
            item={item}
            getAll={getAll}
          />
        ) : null
      )}
    </div>
    <h2>Closed Production Runs</h2>
    <div>
      {list.map((item) =>
        item.openBool === 0 ? (
          <ProductionItem
            key={item.id.toString()}
            item={item}
            getAll={getAll}
          />
        ) : null
      )}
    </div>
  </div>
);

// ProductionList.propTypes = {
//   list: PropTypes.array.isRequired,
//   getAll: PropTypes.func.isRequired,
// };

export default ProductionList;
