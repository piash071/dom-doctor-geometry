function calculateTriangle(){
    // triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);

    // triangle height value
    const triangleHeightInput =document.getElementById('trianle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area);

    // display the area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}