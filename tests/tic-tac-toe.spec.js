const { chromium } = require('playwright');

(async () => {
  // Launch the browser in non-headless mode
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the local server
  await page.goto('http://localhost:3000');

  // Function to simulate clicking on a square
  const clickSquare = async (rowClass, childNumber) => {
    await page.click(`.${rowClass} :nth-child(${childNumber})`);
  };

  // Function to check the game result
  const checkResult = async () => {
    const value = await page.textContent('.result');
    console.log('Game result:', value);
  };

  // Simulate a series of moves in the game
  await clickSquare('firstrow', 1);  // X move
  await clickSquare('secondrow', 1); // O move
  await clickSquare('firstrow', 2);  // X move
  await clickSquare('thirdrow', 1);  // O move
  await clickSquare('firstrow', 3);  // X move

  // Check the game result
  await checkResult();

  // Wait for 5 seconds before closing the browser to inspect the result
  await page.waitForTimeout(5000);

  // Close the browser
  await browser.close();
})();