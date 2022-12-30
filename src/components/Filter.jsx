import React, { useState } from "react";
import { Button, FormCheck } from "react-bootstrap";
import Rating from "./Rating";

const Filter = () => {
  const [rate, setRate] = useState();
  return (
    <div className="filters">
      <span className="title">Filter Products Here</span>
      <span>
        <FormCheck
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>

      <span>
        <FormCheck
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>

      <span>
        <FormCheck
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>

      <span>
        <FormCheck
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>

        <Rating
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        />
      </span>

      <Button variant="light">Clear Filter</Button>
    </div>
  );
};

export default Filter;
