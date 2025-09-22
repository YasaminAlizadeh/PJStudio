# PJ Studio - Agency Landing Page 🎨

A vibrant and responsive landing page for a fictional creative agency, "PJ Studio." This project is a front-end implementation of a modern agency website based on a Dribbble design. It was built using only **vanilla HTML, CSS, and JavaScript**, with a focus on creating a visually engaging and interactive user experience.

![image](https://user-images.githubusercontent.com/68509830/230793666-08895a74-ad43-4500-962c-064fdacbcd9d.png)
![image](https://user-images.githubusercontent.com/68509830/230793707-55362b43-ba42-43b5-bb5f-db86e10f607e.png)
![image](https://user-images.githubusercontent.com/68509830/230793737-f0f45df7-47de-4f32-9dd3-a75c25ed1fcc.png)

## ✨ What is This?

This project is a static website that demonstrates strong foundational skills in front-end development without the use of any frameworks or libraries. The goal was to take a professional, modern UI design and bring it to life using core web technologies, paying close attention to details like animations, responsive design, and interactive elements.

The page is structured as a typical agency landing page, with sections for a hero banner, services/process, features, customer offers, and a footer.

### Core Features

* **🎨 Animated Gradient Headline:** The hero section's main title features a CSS-animated gradient that shimmers across the text on hover, creating a dynamic and eye-catching effect.
* **🖱️ Interactive Hover Effects:** Many elements across the page, such as the process cards and offer items, have interactive hover effects that subtly highlight the user's focus. JavaScript is used to fade out non-hovered items, further emphasizing the active element.
* **📱 Fully Responsive Design:** The entire layout is built with a mobile-first approach, using CSS Grid and Flexbox to ensure the design adapts seamlessly from small mobile screens to large desktop monitors.
* **🍔 Mobile-First Navigation:** Includes a slide-in navigation menu for mobile devices, which is managed entirely with vanilla JavaScript.
* **🧩 Pure CSS & JS Implementation:** All functionalities, including the mobile menu toggle, animations, and interactive states, are implemented with vanilla JavaScript and CSS, with no external libraries or frameworks.

---

## 🔧 Tech Stack & Architecture

This project was built from the ground up to showcase proficiency in the core technologies that power the web.

* **Core Technologies:**
    * **HTML5**
    * **CSS3** (including Flexbox, Grid, Custom Properties, Keyframe Animations, and `clip-path`)
    * **Vanilla JavaScript (ES6+)**
* **Icons:** Font Awesome

### Architectural Highlights

1.  **Modular CSS Structure**
    The styling is organized into separate CSS files for each major section of the page (`header.css`, `hero.css`, `features.css`, etc.). These are all imported into a main `index.css` file. This approach keeps the styles organized and makes it easier to manage the CSS for a multi-section landing page.

2.  **JavaScript-Powered Interactivity (`index.js`)**
    All interactive elements are controlled by a single `index.js` file. This includes:
    * **Menu Toggle:** Toggling a class on the menu element to trigger a CSS transform for the slide-in/slide-out effect.
    * **Hover State Management:** A reusable `hoverAnimation` function adds event listeners to groups of elements. On `mouseover`, it adds an "inactive" class to all other elements in the group, and on `mouseout`, it removes the class. This creates a "focus" effect on the hovered item.
    * **Active State Toggling:** Logic to manage the "active" state for clickable items in the "Our Process" and "Customize Offers" sections.

3.  **Advanced CSS for Layout and Visuals**
    * **Animated Gradient Text:** The hero title's colorful shimmer effect is achieved with a large `background-image: linear-gradient` that is animated on hover using CSS keyframes that change the `background-size`.
    * **Curved Footer:** The unique curved shape of the footer section is created using the `clip-path: ellipse()` CSS property, demonstrating a modern technique for creating non-rectangular layouts.

---

## 🏃‍♂️ How to Run

This is a static website built with vanilla HTML, CSS, and JavaScript.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YasaminAlizadeh/PJStudio.git
    cd PJStudio
    ```

2.  **Open `index.html`:**
    * You can open the `index.html` file directly in your web browser.
    * For the best experience (to avoid potential issues with local file paths), it's recommended to use a simple live server. If you have VS Code, the "Live Server" extension is a great option.
