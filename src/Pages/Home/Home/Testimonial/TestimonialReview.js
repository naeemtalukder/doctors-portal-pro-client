import React from "react";

const TestimonialReview = ({ review }) => {
  const { name, img, review: userReview, location } = review;
  return (
    <section>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialReview;
