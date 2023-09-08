new Vue({
    el: '#app',
    data: {
      questions: [
        {
          question: 'which programming language is commonly used for creating mobile applications?',
          options: ['HTML', 'c++', 'RUBY', 'PHP'],
          correctAnswer: 0
        },
        {
          question: 'Which Programming language is often used for building interactive web pages and web applications?',
          options: ['javascript', 'RUBY', 'C#', 'SWIFT'],
          correctAnswer: 1
        },
        
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