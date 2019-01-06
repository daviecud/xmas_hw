document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');
  const form = document.querySelector('#new-boxer-form');

  const deleteButton = document.querySelector('#deleteAllButton');

  const handleDeleteButton = function(event){
    const boxers = document.querySelector('#boxing-greats');
    boxers.innerHTML = '';
  }

deleteButton.addEventListener('click', handleDeleteButton);

  const addElement = function(type){
    return document.createElement(type);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('event', event);
    const name = event.target.name.value;
    const country = event.target.country.value;
    const weight = event.target.weight.value;
    const fav =  event.target.fav.value;

    const boxers = document.querySelector('#boxing-greats');

    const boxerList = addElement('div');
    const namePara = addElement('p');
    const countryPara = addElement('p');
    const weightPara = addElement('p');
    const favPara = addElement('p');


    namePara.textContent = name;
    countryPara.textContent = country;
    weightPara.textContent = weight;
    favPara.textContent = `Favourite Boxer ? ${fav}`;

    boxerList.appendChild(namePara);
    boxerList.appendChild(countryPara);
    boxerList.appendChild(weightPara);
    boxerList.appendChild(favPara);

    boxers.appendChild(boxerList);

    form.reset();

  }

  form.addEventListener('submit', handleFormSubmit);
});
