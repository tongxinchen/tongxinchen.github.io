---
layout: default
---



<div class="container">
    <div class="box">
        <p>Research 1</p> <!-- Text -->
        <img src="/assets/img/h_1.jpg" alt="Image 1"> <!-- Image -->
    </div>

    <div class="box">
        <p>Research 2</p> <!-- Text -->
        <img src="/assets/img/h_2.jpg" alt="Image 2"> <!-- Image -->
    </div>

    <div class="box">
        <p>Research 3</p> <!-- Text -->
        <img src="/assets/img/h_3.jpg" alt="Image 3"> <!-- Image -->
    </div>
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

.box img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    align-self: flex-start; /* Align image to the top */
}

.box:hover {
    background-color: #ddd;
}
</style>