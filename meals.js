 let data=[];
 const favouriteMealsData=[];
 const localStorageData=JSON.parse(localStorage.getItem('likedMeals'));
 for(let index in localStorageData){
    favouriteMealsData.push(localStorageData[index]);
 }
 async function fetchData(name=""){
    try{
        

    
    const dataJson = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`);
    data = await dataJson.json();
    }catch(err){
        console.log(err);
    }
 }
 export {data,fetchData,favouriteMealsData};