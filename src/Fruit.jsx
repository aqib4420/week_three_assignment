import './App.css'


export default function MyList() {
	let MyFruit = ["red", "green","blue","black"]

    return (
        <ul >
            {MyFruit.map(FruitItem => <li className={`${FruitItem}`}>{FruitItem}</li>)}

        </ul>
    ) 
}



