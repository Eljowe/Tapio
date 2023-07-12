import { useEffect } from "react";

function Table(url: string) {
    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = url;
        script.async = true;
        var container = document.getElementById("container");
        container!.appendChild(script);
    
        return () => {
          <div id="container">

          </div>
        }
      }, [url]);
    return(
        <div>
        </div>
    )
}

export default Table;