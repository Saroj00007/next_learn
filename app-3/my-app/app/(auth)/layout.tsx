

export default function({children} : {
    children : any
}){
    return <div>
        <h3>header</h3>
        {children}

        <h3>footer</h3>

    </div>
}