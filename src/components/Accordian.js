import React from 'react';
import './ComponentStyles.css'

const accordionData = [
  {
    id: 1,
    title: 'Recruitment',
    content: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 2,
    title: 'HR Cunsultancy',
    content: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 3,
    title: 'Training',
    content: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 4,
    title: 'CV Revamping',
    content: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  // Add more accordion items as needed
];

export function Accordian() {
  return (
    <>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {accordionData.map((item) => (
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button Home2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                    <span style={{color:'whitesmoke'}}>{item.title}</span>
                </button>
                </h2>
                <div id={`flush-collapse${item.id}`} class="accordion-collapse Home2 collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">{item.content}</div>
                </div>
            </div>
        ))}
      </div>
    </>
  );
}
