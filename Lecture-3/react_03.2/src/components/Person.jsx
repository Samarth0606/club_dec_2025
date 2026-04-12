
// function Person(props) { //not that good

function Person({naam,umar,isMale,insta}) { //better way
  return (
    <div>
        <h1>Name: {naam} </h1>
        <h1>Age: {umar} </h1>
        <h1>isMale: {JSON.stringify(isMale)} </h1>
        <h1>instagram: {insta} </h1>
    </div>
  )
}

export default Person