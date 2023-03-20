import React from "react";
import Quote from "../../../../accetes/icons/quote.svg";
import people1 from "../../../../accetes/images/people1.png";
import people2 from "../../../../accetes/images/people2.png";
import people3 from "../../../../accetes/images/people3.png";
import TestimonialReview from "./TestimonialReview";

const Testimonial = () => {

    const userReviews = [
        {
            _id: 1,
            name: "Mr. Rahim",
            img: people1,
            review: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi",
            location: "Dhaka"
        },
        {
            _id: 1,
            name: "Mr. Rahim",
            img: people2,
            review: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi",
            location: "Dhaka"
        },
        {
            _id: 1,
            name: "Mr. Rahim",
            img: people3,
            review: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi",
            location: "Dhaka"
        },
    ]


  return (
    <section className="my-16">
      <div className="flex justify-between">
       <div>
       <h4 className="text-xl font-bold text-secondary">Testimonial</h4>
        <h2 className="text-4xl">What Our Patients Says</h2>
       </div>
       <figure>
        <img className="w-24 lg:w-48" src={Quote} alt=""/>
       </figure>
      </div>

      <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            userReviews.map(review => <TestimonialReview key={review._id} review={review}>

            </TestimonialReview>)
        }
      </div>
    </section>
  );
};

export default Testimonial;
