import { Audio } from  'react-loader-spinner';

const style ={
    display:'flex',
    justifyContent:'center',
    padding:'100px 0',
};

export const Preloader =() =>(
    <div style={style}>
        <Audio
    height = {140}
    width = {140}
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'    
    />
    </div>
)
    

