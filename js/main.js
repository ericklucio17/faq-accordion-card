const question = document.getElementsByClassName('question');
const titleQuestion = document.getElementsByTagName('h2');
const response = document.getElementsByClassName('response');
const arrow = document.getElementsByClassName('arrow');

for (let index = 0; index < question.length; index++) {
  question[index].addEventListener('click', function () {
    if (response[index].style.display == 'none') {
      response[index].style.display = 'block';
      titleQuestion[index].style.fontWeight = '700';
      titleQuestion[index].style.getPropertyValue('--very-dark-desaturated-blue');
      arrow[index].style.transform = 'rotate(180deg)';
    } else {
      response[index].style.display = 'none';
      titleQuestion[index].style.fontWeight = '400';
      titleQuestion[index].style.getPropertyValue('--very-dark-grayish-blue');
      arrow[index].style.transform = 'rotate(0deg)';
    }
  });
}
