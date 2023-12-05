---
layout: default
---


____________________
# Research 1

---
layout: default
---

<div class="box">
    <p>Research 1</p> <!-- Text -->
    <img class="hover-effect" src="/assets/img/h_1.jpg" alt="Image 1"> <!-- Image -->
</div>

<style>
.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
    width: 400px; /* Adjusted for 4:3 aspect ratio */
    height: 300px; /* Adjusted for 4:3 aspect ratio */
    margin: 15px auto; /* Added auto to center the boxes */
    background-color: #f0f0f0;
    text-align: left; /* Align text to the left */
    line-height: 150px;
    transition: background-color 0.5s;
    border-radius: 10px;
}

.box img.hover-effect {
    width: 50%;
    height: 50%;
    object-fit: contain;
    align-self: flex-start; /* Align image to the top */
    transition: opacity 0.5s;
}

.box img.hover-effect:hover {
    opacity: 0.7;
}

.box:hover {
    background-color: #ddd;
}
</style>