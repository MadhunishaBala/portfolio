const scriptURL = 'https://script.google.com/macros/s/AKfycbzmojSZJvq8YAOaLoYW9Rs68hqFUO8eR7OwYxMlIiedseTav_SMTUM8aZOORWx2320/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => 
        {
            msg.innerHTML= "Message sent succesfully"
            setTimeout(function(){msg.innerHTML=""},4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    }
)

document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blogList");
    const rightArrow = document.getElementById("rightArrow");
    const blogItems = document.querySelectorAll(".blog-item");
  
    const blogWidth = blogItems[0].offsetWidth;
    const itemsToShow = 3;
    const scrollDistance = blogWidth * itemsToShow;
  
    rightArrow.addEventListener("click", function() {
      blogList.scrollLeft += scrollDistance;
    });
  });

