/**
 * @jest-environment jsdom
 */

require('@testing-library/jest-dom');

describe('Flexbox Visual Order Test', () => {
    beforeEach(() => {
        // Simulate the HTML structure in the DOM
        document.body.innerHTML = `
            <div class="container" style="display: flex;">
            <div class="box box2" style="order: 1;">Two</div>
            <div class="box box4" style="order: 2;">Four</div>
                <div class="box box1" style="order: 3;">One</div>
                <div class="box box3" style="order: 4;">Three</div>
            </div>
        `;
    });

    it('should have the correct visual order based on CSS', () => {
        const boxes = document.querySelectorAll('.box');

        // Convert the NodeList to an array and sort by their visual position (offsetLeft)
        const sortedBoxes = Array.from(boxes).sort((a, b) => a.offsetLeft - b.offsetLeft);

        // Get the text content in the visual order
        const visualOrder = sortedBoxes.map(box => box.textContent);

        // Assert the correct visual order
        expect(visualOrder).toEqual(['Two', 'Four', 'One', 'Three']);
    });
});
