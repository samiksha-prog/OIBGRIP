const calculateTemp = () => {

    const inputTemp=document.getElementById('inputtemp').value;
    if (isNaN(inputTemp)) 
  {
    alert("Must input numbers");
    return false;
  }

  const tempSelected=document.getElementById('temp_diff');
  
  const valueTemp=tempSelected.options[tempSelected.selectedIndex].value;


  const celToFah = (cel) =>{
    let fahrenheit =((cel) *9/5)+32;
    return fahrenheit;
  }

  const fahToCel = (fah) =>{
    let cel= (fah -32 )* (5/9);
    return cel;
  }

  let result;

  if(valueTemp == 'Celsius'){

    result=celToFah(inputTemp);
    document.getElementById('resultContainer').innerHTML= `= ${result} ℉`;
  }else{

    result=fahToCel(inputTemp);
    document.getElementById('resultContainer').innerHTML= `= ${result} ℃`;
  }
}