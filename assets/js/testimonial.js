const TestimoniData = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mesut_%C3%96zil%2C_Germany_national_football_team_%2802%29.jpg",
    content: "b aja sih",
    author: "Muset Ozil",
    rating: 5,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTc-5FE_7NjJ5nzu31aCBaPyix0z6_v9pXw&usqp=CAU",
    content: "ga sor maen",
    author: "sebut saja rangga",
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/236x/5c/c3/f6/5cc3f6674ad8de65983a714f805c70fc.jpg",
    content: "kalau semua, ntar kamu naksir",
    author: "kalau malam putri",
    rating: 4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrg6PElI3dpIDJyYKwAbBXM3tE6JKz0DDOQ&usqp=CAU",
    content: "ingin join pt best dan mendapat rating starts 5?",
    author: "ken arok",
    rating: 3,
  },
  {
    image:
      "https://cdn.pixabay.com/video/2021/08/04/83875-584870588_tiny.jpg",
    content: "kapale hai ",
    author: "inong gampong lorong 12",
    rating: 1,
    
  },
  
];

function html(item) {
  return `
    <div class="testimonial">
        <img src="${item.image}" alt="testimonial" class="profile-testimonial">
            <p class="quote">${item.content}</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>`;
}

function allTestimonial() {
  let testimonialHtml = ``;
  TestimoniData.forEach((item) => {
    testimonialHtml += html(item);
  });

  document.getElementById("testimonials").innerHTML = testimonialHtml;
}

allTestimonial();

function filterTestimonials(rating) {
  let testimonialHtml = ``;
  const testimonialFilter = TestimoniData.filter((item) => {
    return item.rating === rating;
  });

  if (testimonialFilter.length === 0) {
    testimonialHtml = `<h1> Data not found!</h1>`;
  } else {
    testimonialFilter.forEach((item) => {
      testimonialHtml += html(item);
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHtml;
}
