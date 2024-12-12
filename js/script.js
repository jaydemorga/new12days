function revealSurprise(day) {
    const surpriseText = [
      "Surprise for Day 1: A cozy sweater!",
      "Surprise for Day 2: A lovely dinner date.",
      "Surprise for Day 3: A relaxing massage.",
      "Surprise for Day 4: A box of chocolates.",
      "Surprise for Day 5: A weekend getaway!",
      "Surprise for Day 6: A surprise video message.",
      "Surprise for Day 7: A fun outdoor adventure.",
      "Surprise for Day 8: A framed photo of us!",
      "Surprise for Day 9: A heartfelt letter.",
      "Surprise for Day 10: A personalized playlist.",
      "Surprise for Day 11: A beautiful piece of jewelry.",
      "Surprise for Day 12: A day of pampering and relaxation."
    ];
  
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.textContent = surpriseText[day - 1];
    surpriseDiv.style.display = 'block';
  
    // Optionally, disable the clicked box and change its style
    const clickedBox = document.getElementById(`day${day}`);
    clickedBox.style.backgroundColor = '#dcdcdc';  /* grey */
    clickedBox.style.pointerEvents = 'none';
  }
  