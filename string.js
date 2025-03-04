<script>
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle("active");
    });
  });
</script>
<script src="contact.js"></script>

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains('fade-out')) {
    document.body.classList.remove('fade-out');
  }

  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');

      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 1000);
    });
  });
});

