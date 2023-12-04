//// max group by 'product' : 1 over
const generateQuestions = (quantity) => {
    if (quantity < 1) {
        quantity = 1;
    }

    if (quantity > _.size(quizzes)) {
        quantity = _.size(quizzes);
    }

    return _.chain(quizzes).groupBy('product').sampleSize(quantity).flatten().shuffle().sampleSize(quantity).value();
};
