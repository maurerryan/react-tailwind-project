import React, { useState } from 'react';
import plate from '../plate.jpg';

export default function AddRecipe() {

    const styles = {
      
        content: {
        //   height: '100%',
        //   width: '100%',
          //backgroundColor: 'rgba(0, 255, 0, 0.5)',
        }
      }

    const [recipe, setRecipe] = useState();


    function addRecipe() {
        setRecipe([...recipe, {
            name: 'test5',
        }])
    }

  return (
    // <div>
    // <h2>Add Recipe</h2>
    //     <form action="#" onSubmit={addRecipe}>
    //         <input type="text" className="recipe-input" placeholder="Recipe Name" />
    //     </form>
    // </div>
    <div className="content" class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5" >
    
    <div class="rounded overflow-hidden shadow-lg">
    <img class="w-full" src={plate} alt="Plate" />
    <div class="px-6 py-4">
    <div class="flow-root">  
        {/* <div class="font-bold text-xl mb-2 float-left text-orange-600">
        <input type="text" className="recipe-input" placeholder="Recipe Name" /></div> */}
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Recipe Name"></input>
        <div class="font-bold text-sm mb-2 float-right text-teal-500"> <input type="text" className="recipe-input" placeholder="Servings" /></div></div>
        <p class="text-gray-700 text-base">
        test
        </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tuna</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pasta</span>
    </div>
    </div>
    </div>

 
  )
}
