// Quotes Array
    const quotes = [
      "Believe you can and you're halfway there.",
      "Don’t wait. The time will never be just right.",
      "Success doesn’t just find you. You have to go out and get it.",
      "The harder you work for something, the greater you’ll feel when you achieve it.",
      "Dream it. Wish it. Do it.",
      "Stay positive. Work hard. Make it happen.",
      "Great things never come from comfort zones.",
      "Push yourself, because no one else is going to do it for you.",
      "Believe you can and you're halfway there.",
      "Don’t watch the clock; do what it does. Keep going." ,

"Success is not final, failure is not fatal: It is the courage to continue that counts.",

"Push yourself, because no one else is going to do it for you.",

"The harder you work for something, the greater you'll feel when you achieve it.",

"Don’t wait. The time will never be just right.",

"You don’t have to be great to start, but you have to start to be great.",

"Dream big. Start small. Act now." ,

"Success doesn’t come from what you do occasionally, it comes from what you do consistently.",

"Stay positive. Work hard. Make it happen.",

"Great things never come from comfort zones.",

"Small progress is still progress.",

"Discipline is doing what needs to be done, even if you don’t want to do it.",

"It always seems impossible until it's done.",

"Start where you are. Use what you have. Do what you can.",

"Doubt kills more dreams than failure ever will.",

"The only limit to our realization of tomorrow is our doubts of today.",

"If it doesn’t challenge you, it won’t change you.",

"Success is what comes after you stop making excuses.",

"You are stronger than you think.",

"Action is the foundational key to all success.",

"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",

"Make each day your masterpiece.",

"Success is not how high you have climbed, but how you make a positive difference to the world." ,

"Hard work beats talent when talent doesn’t work hard.",

"Keep going. Everything you need will come to you at the perfect time.",

"Do something today that your future self will thank you for.",

"Wake up with determination. Go to bed with satisfaction.",

"You don’t need to see the whole staircase, just take the first step.",

"You were born to be real, not perfect.",

"Be so good they can’t ignore you.",

"Hustle in silence. Let your success make the noise.",

"Don’t stop when you’re tired. Stop when you’re done.",

"Learn as if you will live forever, live like you will die tomorrow." ,

"The secret of getting ahead is getting started." ,

"Strive not to be a success, but rather to be of value." ,

"Opportunities don't happen. You create them." ,

"Success is the sum of small efforts, repeated day in and day out." ,

"Be the energy you want to attract.",

"Every accomplishment starts with the decision to try.",

"Your only limit is your mind.",

"Don’t limit your challenges. Challenge your limits.",

"It’s never too late to be what you might have been." ,

"Focus on the step in front of you, not the whole staircase.",

"Difficult roads often lead to beautiful destinations.",

"You are capable of amazing things.",

"Do not wait for opportunity. Create it.",

"The best view comes after the hardest climb.",

"Success usually comes to those who are too busy to be looking for it.",

"Winners are not people who never fail, but people who never quit."
    ];

    function getQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quote").innerText = quotes[randomIndex];
    }

    // Load first quote on page load
    window.onload = getQuote;

    // To-Do List
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();
      if (!taskText) return;

      const li = document.createElement("li");
      li.textContent = taskText;
      li.onclick = () => li.classList.toggle("done");

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "×";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
      };

      li.appendChild(removeBtn);
      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
    }

    // Notes
    function saveNote() {
      const noteText = document.getElementById("noteText");
      const noteContent = noteText.value.trim();
      if (!noteContent) return;

      const li = document.createElement("li");
      li.textContent = noteContent;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "×";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = () => li.remove();

      li.appendChild(removeBtn);
      document.getElementById("noteList").appendChild(li);
      noteText.value = "";
    }

    // Theme toggle
    function toggleTheme() {
      const body = document.body;
      const current = body.getAttribute("data-theme");
      body.setAttribute("data-theme", current === "light" ? "dark" : "light");
    }