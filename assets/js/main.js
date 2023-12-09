// Select all the containers
let containers = document.querySelectorAll('.container');

// Loop through each container
containers.forEach((container, index) => {
    // Select the p and img elements within the container
    let pElement = container.querySelector('p');
    let imgElement = container.querySelector('img');

    // Set the href attribute of the p element to the desired link
    pElement.setAttribute('href', `https://https://tongxinchen.github.io/publication#image${index + 1}`);

    // Set the id attribute of the img element to a unique identifier based on its position
    imgElement.setAttribute('id', `image${index + 1}`);
});