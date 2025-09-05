import Card from "./Card"

export default function Home() {


  return (
    <div>
      {/* Input Number */}
        <div className="flex justify-center m-5 gap-4">
        <input type="number" name="num" id="num" placeholder="Escolha um número!"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {/* Input Button*/}
        <input type="button" value="Enviar!" 
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 p-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        />
        </div>
         <div className="m-12 p-4 flex  justify-center flex-row flex-wrap gap-4"> {/*Div container dos Cards*/}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
           
        </div>
    
    </div>
  )
}
