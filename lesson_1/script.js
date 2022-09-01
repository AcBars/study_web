const para = document.querySelector('p');

      para.addEventListener('click', updateName);

      function updateName() {
        const name = prompt('Введите свое имя');
        para.textContent = `Привет! ${name}`;
      }