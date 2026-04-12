//named export
function Div() {
  return (
    <div>Dog</div>
  )
}

//default export
function Golden(){
    return( <h1>Namaste Golden</h1> )
}

//named export
function Pitbull(){
    return( <h1>Namaste Pitbull</h1> )
}

export default Golden;
export {Div,Pitbull}
// export {Div,Pitbull, Golden}