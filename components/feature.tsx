export interface Props {
    name: string;
    image: string;
    description: string;
    num: "left" | "right";
    numClass: "featureGrey" | "featureNone";
}

function invert(str: "left" | "right") {
    return str == "left" ? "right" : "left";
}

export default function Feature(props: Props) {
    if(props.num == "left"){
        return (
            <>
                <div className={"feature flex-col sm:flex-row text-center sm:text-left featureGrey"}>
                    <div className="sm:w-1/2 p-4 sm:p-8">
                        <img className="rounded-lg  mx-auto img-size" src={props.image} /> 
                    </div>
                    <div className="w-full sm:w-1/2 sm:p-8 feature-header">
                        <h1 className="font-extrabold text-4xl mb-3">{props.name}</h1>
                        <p className="font-500 text-lg">{props.description}</p>
                        
                        <a className="addToServer block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-5 py-3 text-xl font-sans" href="/guilds">Add to Server</a>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={"ofeature flex-col sm:flex-row-reverse text-center sm:text-right featureNone"}>
                    <div className="sm:w-1/2 p-4 sm:p-8">
                        <img className="rounded-lg  mx-auto img-size" src={props.image} /> 
                    </div>
                    <div className="w-full sm:w-1/2 sm:p-8 feature-header">
                        <h1 className="font-extrabold text-4xl mb-3">{props.name}</h1>
                        <p className="font-500 text-lg">{props.description}</p>
                        
                        <a className="addToServer block bg-white text-black font-bold transition duration-200 shadow hover:shadow-2xl ease-in-and-out rounded-lg mx-auto mt-16 px-5 py-3 text-xl font-sans" href="/guilds">Add to Server</a>
                    </div>
                </div>
            </>
        );
    }
}