const exos = document.querySelector('.exos');
const btns = document.querySelectorAll('.btn-tab');
const exercises = document.querySelectorAll('.content');
const parts = document.querySelectorAll('.part');

parts.forEach(function (part) { 
  const btn = part.querySelector('.btn');

  btn.addEventListener('click', function () { 
    parts.forEach(function (item) { 
      if (item !== part) { 
        item.classList.remove('show-exos');
      }
    });

    part.classList.toggle('show-exos');
  });
});

exos.addEventListener('click', function (e) { 
  const id = e.target.dataset.id;
  if (id) { 
    btns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    exercises.forEach(function (exercise) { 
      exercise.classList.remove('active');
    });

    const element = document.getElementById(id);
    element.classList.add('active');
  }
});