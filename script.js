const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // Close others
        faqItems.forEach(faq => {
            if(faq !== item){
                faq.classList.remove("active");
            }
        });

        // Toggle current
        item.classList.toggle("active");
    });

});