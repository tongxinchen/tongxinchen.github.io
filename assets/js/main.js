// Select all the containers
let containers = document.querySelectorAll('.container');

// Loop through each container
containers.forEach((container, index) => {
    // Select the p element and the img element within the container
    let pElement = container.querySelector('p');
    let imgElement = container.querySelector('img');

    // Create a new a element
    let aElement = document.createElement('a');

    // Set the href attribute of the a element to link to the corresponding position in the publication page
    aElement.setAttribute('href', `https://tongxinchen.github.io/publication#p_${index + 1}`);

    // Add the same classes as the p and img elements to the a element
    aElement.className = pElement.className + ' ' + imgElement.className;

    // Append the p element and the img element to the a element
    aElement.appendChild(pElement.cloneNode(true));
    aElement.appendChild(imgElement.cloneNode(true));

    // Replace the p element and the img element with the a element in the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(aElement);
});


console.log("main.js has been executed");