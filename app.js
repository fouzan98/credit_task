new Vue({
    el: '#app',
    data: {
      questions: [
        {
          question: 'What is the capital of Australia?',
          options: ['sydney', 'Melbourne', 'perth', 'Adelaide'],
          correctAnswer: 0
        },
        {
          question: 'which planet often referred to as the Morning star?',
          options: ['Mercury', 'saturn', 'Neptune', 'uranus'],
          correctAnswer: 1
        },
        // Add more questions here
      ],
      currentQuestionIndex: 0,
      score: 0
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      }
    },
    methods: {
      selectOption(selectedIndex) {
        if (selectedIndex === this.currentQuestion.correctAnswer) {
          this.score++;
        }
        
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
        } else {
          this.currentQuestionIndex = null;
        }
      }
    }
  });