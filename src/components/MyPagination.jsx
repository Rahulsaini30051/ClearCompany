import { createMuiTheme,ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';


const MyPagination=({setCurrentPage,numOfPages=10})=>{

    const pageTheme= createMuiTheme({
        palette:{type:"dark"}
    })
    const handlePageChange=(PageNo)=>{

        setCurrentPage(PageNo);
    
    }
    return(<div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
                   <ThemeProvider theme={pageTheme}>
                    <Pagination count={numOfPages} onChange={(e)=>handlePageChange(e.target.textContent)}/>
                    </ThemeProvider>
           </div>);
}
export default MyPagination;
