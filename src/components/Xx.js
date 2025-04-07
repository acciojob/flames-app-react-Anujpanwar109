import React,{useState} from 'react'

const Xx = () => {
    let[data1,setData1]=useState("")
    let[data2,setData2]=useState("")
    let [data,setData]=useState("")

    const relationshipMap = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];


    function checkRelation(){
        if(data1===""||data2===""){
            setData("Please enter a valid input")
            return;
        }
        let arr1name=data1.split("")
        let arr2name=data2.split("")
        for(let i=0;i<arr1name.length;i++){
            const index=arr2name.indexOf(arr1name[i])
            if(index !== -1){
                arr1name[i]=""
                arr2name[index]=""
            }
            

        }
        const count=
            arr1name.filter((char)=>char !=="").length+
            arr2name.filter((char)=>char !=="").length

        let rIndex=count%6
        setData(relationshipMap[rIndex])
    }
    function clearFeild(){
        setData("")
        setData1("")
        setData2("")
        
    }

  return (
    <div>
        
        <input
            data-testid="input1"
            name="name1"
            value={data1}
            onChange={(e)=>setData1(e.target.value)}
        />
        
        <input
            data-testid="input2"
            name="name2"
            value={data2}
            onChange={(e)=>setData2(e.target.value)}
            
        />
        <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={checkRelation}
        >
            calculate
        </button>
        <button
        data-testid="clear"
        name="clear"
        onClick={clearFeild}
        >
            Clear
        </button>
        <h1 data-testid="answer" >{data}</h1>
    </div>
  )
}

export default Xx