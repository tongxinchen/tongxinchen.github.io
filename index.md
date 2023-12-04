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
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px; /* Adjusted for 4:3 aspect ratio */
    height: 300px; /* Adjusted for 4:3 aspect ratio */
    margin: 15px auto; /* Added auto to center the boxes */
    background-color: #f0f0f0;
    text-align: center;
    line-height: 150px;
    transition: background-color 0.5s;
    border-radius: 10px;
}

.container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.container:hover {
    background-color: #ddd;
}
</style>