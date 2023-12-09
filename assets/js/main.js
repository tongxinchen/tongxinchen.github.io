// Select all the containers
let containers = document.querySelectorAll('.container');

// Loop through each container
containers.forEach((container, index) => {
    // Select the p element within the container
    let pElement = container.querySelector('p');

    // Create a new a element
    let aElement = document.createElement('a');

    // Set the href attribute of the a element to link to the corresponding position in the publication page
    aElement.setAttribute('href', `https://tongxinchen.github.io/publication#p_fig${index + 1}`);

    // Set the content of the a element to be the content of the p element
    aElement.textContent = pElement.textContent;

    // Replace the p element with the a element in the container
    container.replaceChild(aElement, pElement);
});
console.log("main.js has been executed");