

export function Layout(){
   return(
    <div>
       <div className="container">   
   
    <div className="default-row">
    <h3>Examplo 1:</h3>
          <div className="row">
            <div className="col">Item 1</div>
            <div className="col"> Item 2</div>
            <div className="col">Item 3</div>
            <div className="col"> Item 4</div>
          </div>
          </div>

  
    <div className="default-row">
    <h3>Examplo 2:</h3>
          <div className="row">
            <div className="col">Item 1</div>
            <div className="col"> Item 2</div>
            <div className="col">
              <div className="row ">                   
                <div className="col">Item 3</div>
                <div className="col">Item 4</div>
            </div>
            </div>
          </div>
        </div>
</div>



          

</div>) 
}