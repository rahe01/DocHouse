
import { DotLoader
} from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <DotLoader
 size={100} color='#07332F' />
    </div>
  )
}



export default LoadingSpinner
