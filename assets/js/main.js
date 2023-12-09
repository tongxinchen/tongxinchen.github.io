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
    aElement.setAttribute('href', `https://tongxinchen.github.io/publication#p_fig${index + 1}`);

    // Append the p element and the img element to the a element
    aElement.appendChild(pElement.cloneNode(true));
    aElement.appendChild(imgElement.cloneNode(true));

    // Apply the same styles as the p and img elements
    aElement.style.position = 'absolute';
    aElement.style.top = '20%';
    aElement.style.left = '10%';
    aElement.style.right = '10%';
    aElement.style.alignContent = 'center';
    aElement.style.justifyContent = 'end';
    aElement.style.opacity = '0';
    aElement.style.transition = 'opacity 0.3s ease';
    aElement.style.color = '#222222';
    aElement.style.fontSize = '18px';
    aElement.style.textAlign = 'center';
    aElement.style.fontWeight = 'bold';

    // Replace the p element and the img element with the a element in the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(aElement);
});


console.log("main.js has been executed");