// Navbar Toggle for Mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  
  // Project Preview on Hover
  document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");
    
    projects.forEach((project) => {
      // Create preview container only if data-image attribute is provided
      if (project.dataset.image) {
        const preview = document.createElement("div");
        preview.classList.add("preview-container");
        preview.innerHTML = `<img src="${project.dataset.image}" alt="Project Preview" class="preview-image">`;
        document.body.appendChild(preview);
    
        project.addEventListener("mousemove", (e) => {
          preview.style.left = `${e.pageX + 20}px`;
          preview.style.top = `${e.pageY + 20}px`;
        });
    
        project.addEventListener("mouseenter", () => {
          preview.style.display = "block";
          setTimeout(() => { preview.style.opacity = "1"; }, 10);
        });
    
        project.addEventListener("mouseleave", () => {
          preview.style.opacity = "0";
          setTimeout(() => { preview.style.display = "none"; }, 300);
        });
      }
    });
  });
  