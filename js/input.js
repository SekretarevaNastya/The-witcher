var exports = [{
  id: 1,
  name: "Nilfgaard",
  image: "nilfgaard.jpg"
},
{
  id: 2,
  name: "Redania",
  image: "redania.jpg"
},
{
  id: 3,
  name: "Skellige",
  image: "skellige.jpg"
},
{
  id: 4,
  name: "Emhyr var Emreis",
  post: "Urcheon of Erlenwald",
  image: "emhyr.jpg",
  parent: 1,
},
{
  id: 5,
  name: "Morvran Voorhis",
  post: "General Commander",
  image: "morvran.jpg",
  parent: 1,
},
{
  id: 6,
  name: "Jan Calveit",
  post: "Magne Division",
  image: "calveit.jpg",
  parent: 1,
},
{
  id: 7,
  name: "Ardal aep Dahy",
  post: "East Army Group",
  image: "ardal.jpg",
  parent: 4,
},
{
  id: 8,
  name: "Ceallach Dyffryn",
  post: "Seneschal",
  image: "ceallach.jpg",
  parent: 4,
},
{
  id: 9,
  name: "Joachim de Wett",
  post: "Prince",
  image: "joachim.jpg",
  parent: 4,
},
{
  id: 10,
  name: "Shilard Fitz-Oesterlen",
  post: "Ambassador",
  image: "shilard.jpg",
  parent: 4,
},
{
  id: 11,
  name: "Stefan Skellen",
  post: "Imperial coroner",
  image: "skellen.jpg",
  parent: 4,
},
{
  id: 12,
  name: "Menno Coehoorn",
  post: "Governor of Cintra",
  image: "menno.jpg",
  parent: 4,
},
{
  id: 13,
  name: "Vattier de Rideaux",
  post: "Spymaster",
  image: "vattier.jpg",
  parent: 4,
},
{
  id: 14,
  name: "Letho of Gulet",
  post: "Witcher",
  image: "letho.jpg",
  parent: 5,
},
{
  id: 15,
  name: "Cahir Dyffryn",
  image: "dyffryn.jpg",
  parent: 5,
},
{
  id: 16,
  name: "Vilgefortz",
  post: "Mage",
  image: "vilgefortz.jpg",
  parent: 5,
},
{
  id: 17,
  name: "Tibor Eggebracht",
  post: "Soldier",
  image: "tibor.jpg",
  parent: 6,
},
{
  id: 18,
  name: "Xarthisius",
  post: "Mage",
  image: "xarthisius.jpg",
  parent: 6,
},
{
  id: 19,
  name: "Albrich",
  post: "Mage",
  image: "albrich.jpg",
  parent: 7,
},
{
  id: 20,
  name: "Peter Saar Gwynleve",
  post: "Soldier",
  image: "gwynleve.jpg",
  parent: 7,
},
{
  id: 21,
  name: "Assire var Anahid",
  post: "Mage",
  image: "anahid.jpg",
  parent: 8,
},
{
  id: 22,
  name: "Fringilla Vigo",
  post: "Mage",
  image: "fringilla.jpg",
  parent: 10,
},
{
  id: 23,
  name: "Sweers",
  post: "Knight",
  image: "sweers.jpg",
  parent: 22,
},
{
  id: 24,
  name: "Vanhemar",
  post: "Mage",
  image: "vanhemar.jpg",
  parent: 23,
},
{
  id: 25,
  name: "Auckes",
  post: "Witcher",
  image: "auckes.jpg",
  parent: 18,
},
{
  id: 26,
  name: "Radovid V",
  post: "King of Redania",
  image: "radovid.jpg",
  parent: 2,
},
{
  id: 27,
  name: "Horst Borsodi",
  post: "Auctioneer",
  image: "horst.jpg",
  parent: 26,
},
{
  id: 28,
  name: "Ewald Borsodi",
  post: "Assassin",
  image: "borsodi.jpg",
  parent: 27,
},

{
  id: 29,
  name: "Iris von Everec",
  post: "Painter",
  image: "iris.jpg",
  parent: 26,
},
{
  id: 30,
  name: "Olgierd von Everec",
  post: "Soldier",
  image: "olgierd.jpg",
  parent: 29,
},
{
  id: 31,
  name: "Philippa Eilhart",
  post: "Mage",
  image: "philippa.jpg",
  parent: 26,
},
{
  id: 32,
  name: "Sigismund Dijkstra",
  post: "Spymaster",
  image: "dijkstra.jpg",
  parent: 26,
},
{
  id: 33,
  name: "Vlodimir von Everec",
  post: "Noble",
  image: "everec.jpg",
  parent: 26,
},
{
  id: 34,
  name: "Vicovaro",
  post: "Novice",
  image: "vicovaro.jpg",
  parent: 31,
},
{
  id: 35,
  name: "Bran Tuirseach",
  post: "The Conqueror",
  image: "bran.jpg",
  parent: 3,
}
];


const navigationBlock = document.querySelector('.navigation');

let heroAr = [];
let activeHeroAr = [];

let sliderItem = undefined; 
const btnPrev = document.querySelector('.prev'); 
const btnNext = document.querySelector('.next'); 

const heroesBlock = document.querySelector('.heroes');
let heroesWrapper = heroesBlock.querySelector('.heroes__wrapper');
let heroItemBlocks = heroesWrapper.querySelectorAll('.hero');
const logo = document.querySelector('.logo');
let slider = document.querySelector('.slider');
let sliderWrapper = slider.querySelector('.slider__wrapper');

const navigationLogoBtn = document.querySelector('.navigation__logo-btn');

/* извлекаем данные из массива exports и формируем новый массив arr */
const getParentArray = (num) => {
const arr = [];
exports.forEach((el, i) => {
  if (el.parent === num) {
      arr.push(i);
  }
});
return arr;
}

/*функция переключения слайдов. Находим все элементы в слайде. Включаем итерацию массива со всеми слайдами. Если находит активный слайд, то удаляет активный клас и скрывает его. Все остальные действия происходят в отслеживание клика по кнопке(btn.addEventListener)*/
const showSlides = (n) => {
let slideIndex = n;
const slides = document.querySelectorAll(".slider__wrapper .hero"); 
for (i = 0; i < slides.length; i += 1) { 
  if (slides[i].classList.contains('active')) { 
      slides[i].classList.remove('active'); 
      slides[i].classList.add('inactive'); 
  }
}

/*Далее включаем активный(актуальный) слайд. И отправляем активный слайд в функцию, для того, что бы сгенерировать подчиненных активного слайда*/
slides[slideIndex].classList.remove('inactive'); 
slides[slideIndex].classList.add('active'); 
return generateParentActiveSlide(slideIndex); 
}

/* Функция увеличивает индекс на 1, показывает следующй слайд. С помощью  preventDefault уберем стандартные действия, которые происходят при клике на ссылку. Проверяем при нажатии на переключение, можно ли переключить на следующий слайд, после активного(существует ли он). Соответственно, проверяем, i + 1 это больше чем длинна всех элементов в слайде? Если да, то, нам нужно переключить на начальный.*/
btnNext.addEventListener('click', (e) => {
e.preventDefault(); 
const slides = document.querySelectorAll(".slider__wrapper .hero"); 
const getNumberSlide = (i) => {  
  if (i + 1 === slides.length) {
        /*Перед тем, как перключится на начальный, надо проверить, есть ли у него подчиненные. Тут мы вызываем, функцию, в которую мы передаем Number(Number - это после массива с объектами) куда передаем id героя, чтобы получить массив, в котором узнаем, есть ли у него подчиненные. Если нет, то вызываем ту же функцию, что бы он проверил следующий слайд. Если первый элемент слайдера, все таки имеет какую-то длину, то передаем слайдеру индекс активного сдайла*/
      if (getParentArray(Number(slides[0].id)).length === 0) { 
          return showSlides(1); 
      }
      return showSlides(0);
  } 
  
  /*если верхние условия не подходят, то точно так же проверяем, имеет ли длину следующий слайд, если у него нет подчиненных, то передаем этой же функции следующий слайд. */
  else { 
      if (getParentArray(Number(slides[i + 1].id)).length === 0) {  
          return getNumberSlide(i + 1); 
      }
      return showSlides(i + 1); //если, верхнее условие не соблюдается, то, значит у слайда есть подчиненные и мы делаем его активным
  }
}
/*итерация массива со всеми слайдами. Если находится слайд с активным классом, то вызываем функцию, которая сверху, и передаем индекс активного слайда.*/
for (let i = 0; i < slides.length; i += 1) { 
  if (slides[i].classList.contains('active')) { 
      return getNumberSlide(i); 
  }
}
});

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
btnPrev.addEventListener('click', (e) => {
e.preventDefault();
const slides = document.querySelectorAll(".slider__wrapper .hero");
const getNumberSlide = (i) => {
  if (i - 1 === -1) {
      if (getParentArray(Number(slides[slides.length - 1].id)).length === 0) {
          return getNumberSlide(slides.length - 2);
      }
      return showSlides(slides.length - 1)
  } else {
      if (getParentArray(Number(slides[i - 1].id)).length === 0) {
          return getNumberSlide(i - 1);
      }
      return showSlides(i - 1);
  }
}
const getNextSlide = () => {
  for (let i = 0; i < slides.length; i += 1) {
      if (slides[i].classList.contains('active')) {
          getNumberSlide(i)
          return;
      }
  }
}
getNextSlide();
});

/* проверяем сколько у героя подчиненных. */
const getParent = (i) => {
let parent = 0; 
if (parent !== 0) { 
  parent = 0; 
}
exports.forEach(el => { 
  if (el.parent === i + 1) { 
      parent += 1; 
  }
});
return parent; 
}

/* функция, проверяет, если id элемента ровняется 0, 1, 2 (страна), то возвращем пустую строку. А если не они, то возвращаем блок label, где будет колиество подчиненных*/
const generatLabel = (id, num) => { 
if (Number(id) === 0 || Number(id) === 1 || Number(id) === 2) { 
  return '';  
} else {
  return `<div class="label"><img src="img/icon.png"><p class="label__paragraph">${num}</p></div>`; 
}
}

// эта функция делает тоже самое, только с тектом post.
const generatheroPost = (id) => { 
if (Number(id) === 0 || Number(id) === 1 || Number(id) === 2) {
  return '';
} else {
  return `<div class="hero__post"><span class="text">${exports[[id]].post}</span></div>`;
}
}

/* основная функция генерации героев. В аргументах передаем массив arr, в котором содержатся индекс героев, которые нужно сгенерировать из exports и var2 это блок, в который нужно этих героев сгенерировать(либо слайдер, либо блок с подчиненными). Если эта функция вызывается, то включается навигацию (back и логотип) */
const generateHero = (arr, var2) => { 
navigationBlock.style.display = 'flex'; 

/*итарация передаваемого массива. Проверяем, есть ли у него подчиненные, что бы записать их в label. Создаем блок(в итоге это будет блок с героем). Задаем ему id, name и image в соответствии с положением в exports*/
for (let i = 0; i < arr.length; i += 1) { 
  let parentNum = getParent(arr[i]); 
  const heroBlock = document.createElement('div'); 
  heroBlock.id = `${exports[arr[i]].id}`; 
  heroBlock.className = `hero ${exports[[arr[i]]].name}`; 
  heroBlock.innerHTML = `<div class="hero__avatar"><img class="hero__img" src="img/${exports[[arr[i]]].image}" alt="Страна"> 
  ${generatLabel(arr[i], parentNum)}
  </div>
  <div class="hero__name"><p class="paragraph">${exports[[arr[i]]].name}</p></div>
  ${generatheroPost(arr[i])}
  </div>`; 
  var2.appendChild(heroBlock); 
}
heroesWrapper = heroesBlock.querySelector('.heroes__wrapper'); 
heroItemBlocks = heroesWrapper.querySelectorAll('.hero'); 
}

/* Генерация подчиненных на основе активного слайда в слайдере. Создаем массив с пустым значением. Если через цикл находит подчиненного,то добавляет его в массив(данный массив генерируется для того, что бы потом передать его в generateHero, что бы сгенерировать героев. */
const generateParentActiveSlide = (slideIndex) => {
const slides = document.querySelectorAll(".slider__wrapper .hero");

  let parentAr = []; 
  const getParent = (id) => { 
      for (let i = 0; i < exports.length; i += 1) { 
          if (exports[i].parent === id) { 
              parentAr.push(i); 
          }
      }
      /*проходимся по массиву героев, которые уже сформированы и удаляем их, потому что будут добавленны новые*/
      heroItemBlocks.forEach(el => { 
          heroesWrapper.removeChild(el); 
      });
      generateHero(parentAr, heroesWrapper); 
      parentAr = []; 
  }

  /*проходимся по всем слайдам, если находим слайд с классом active, то передаем число, которое содержит его id*/
  slides.forEach(el => { 
      if (el.classList.contains('active')) { 
          getParent(Number(el.id)); 
      }
  })
}

/* Отслеживание клика по элементам блока heroes__wrapper  он имеет класс .hero, то присваиваем переменной класс active, который будет в слайдере(этот же элемент, по которому кликнули. Перебором элементов удаляем элементы которые уже сформированны из слайдера */
document.addEventListener('click', e => {
let newItemSliderAr = [];
if (e.target.parentElement === heroesWrapper && e.target.classList.contains('hero')) { 
  /*если click быть по элементу, у которого нет подчиненных, значит клик не засчитывается*/
    if (getParentArray(Number(e.target.id)).length === 0) { 
      return; 
  }
  slideIndex = e.target.id; 
  logo.classList.remove('active');  // здесь же прячем блок с логотипом
  sliderWrapper.querySelectorAll('.hero').forEach(el => { 
      sliderWrapper.removeChild(el); 
      newItemSliderAr.push(Number(el.id) - 1);
      if (el.classList.contains('active')) {
          activeHeroAr.push(Number(el.id));
      }
  });
  if (newItemSliderAr.length !== 0) {
      heroAr.push(newItemSliderAr);
  }

  /*дальше создаем новый массив перебором элементов hero (добавляем классы active или inactive в зависимости от элемента по которому кликнули)*/
  newItemSliderAr = [];
  heroItemBlocks.forEach(hero => { 
    /*если id итерируемого элемента не равен элементу по которому кликнули, то добавляем ему не активный класс и отправляем его в слайдер*/
      if (hero.id !== e.target.id) { 
          hero.classList.add('inactive'); 
          sliderWrapper.appendChild(hero); 
      };

    /*если id итерируемого элемента равен элементу по которому кликнули, то добавляем ему активный класс и отправляем его в слайдер*/
      if (hero.id === e.target.id) { 
          hero.classList.add('active'); 
          sliderWrapper.appendChild(hero); 
      };
  });

  /*если у слайдера нет активного класса, то добавляем его*/
  if (!slider.classList.contains('active')) { 
      slider.classList.add('active'); 
  }
 
  /*передаем id героя который активный в слайдере, что бы в блоке героев сгенерировались подчиненные, которые пренадлежат этому герою*/
    generateHero(getParentArray(Number(e.target.id)), heroesWrapper); 
  
}
if (newItemSliderAr.length === 1) {
  activeHeroAr.push(newItemSliderAr[0]);
}
newItemSliderAr = [];
heroesWrapper = heroesBlock.querySelector('.heroes__wrapper'); 
heroItemBlocks = heroesWrapper.querySelectorAll('.hero'); 
});

/*клик по логотипу возвращает самое первое значение(главную страницу). Logo добавляем класс active, слайдер скрываем*/
navigationLogoBtn.addEventListener('click', e => { 
e.preventDefault();
logo.classList = "logo active"; 
slider.classList = 'slider'; 

/*что бы добавить страны(id 1,2,3), нужно удалить уже имеющиеся значения героев*/
heroItemBlocks.forEach(el => { 
  heroesWrapper.removeChild(el); 
});

/*так же удаляем героев из слайдера*/
sliderWrapper.querySelectorAll('.hero').forEach(el => {  
  sliderWrapper.removeChild(el); 
});

generateHero([0, 1, 2], heroesWrapper); // генерируем самые первые значения(id 1,2,3)
heroAr = []; // обнуляем массив с героями
navigationBlock.style.display = 'none'; // убираем навигацию(кнопку back и logo)
});

//работа кнопки back
const navBtn = document.querySelector('.navigation__btn');

navBtn.addEventListener('click', e => { 
if (logo.classList.contains('active')) { 
  return;
}
e.preventDefault();
let heroSlides = sliderWrapper.querySelectorAll('.hero'); 
heroItemBlocks.forEach(elWrp => { // удаляем старые значения
  heroesWrapper.removeChild(elWrp);
  return;
})

/* итерируем слайды. Если id слайда меньше или ровно 3, значит навигация нам не нужна */
heroSlides.forEach((elSlides) => {  
  if (Number(elSlides.id) <= 3) { 
      logo.classList = "logo active"; 
      navigationBlock.style.display = 'none'; 
      slider.classList = 'slider'; 
  }
  if (elSlides.classList.contains('active') || elSlides.classList.contains('inactive')) {
      elSlides.className = "hero";
  }
  heroesWrapper.appendChild(elSlides);
  navigationBlock.style.display = 'none';
  return;
});

/* Возвращаем подчиненных в блок heroes__wrapper. Генерируем героев исходя из того, какие герои добавленны в массив. А потом удаляет, потому что, если будет нажата кнопка back снова, что бы не взялись старые значения */
if (heroAr.length !== 0) { 
  generateHero(heroAr[heroAr.length - 1], sliderWrapper); 
  heroAr.pop(); 
  const newSliderItems = document.querySelectorAll('.slider__wrapper .hero');
  /*далее, задаем активный класс герою в слайдере. Проверяем, если id героя соответствует активному в массиве, то добавляем ему active  и извлекаем. Если не соответствует, то он не активный*/
  newSliderItems.forEach(sliderItem => { 
      if (Number(sliderItem.id) === activeHeroAr[activeHeroAr.length - 1]) { 
          sliderItem.classList.add('active'); 
          activeHeroAr.pop(); 
      } else {
          sliderItem.classList.add('inactive');
      }
  });
} else {
  return;
}
});