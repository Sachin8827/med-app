import { ImageDiv, InfectedAreaSection, IntensityRange, MyformControl } from "../../../assets/styles/styled"
import { DiseaseInputFieldProps } from "../../../Types/Types"

const InputField: React.FC<DiseaseInputFieldProps> = ({ image, isSelected, name, num, onClick }) => {
    return <>


        <ImageDiv onClick={onClick} name={name} sx={{ border: isSelected ? '3px solid #076EB0' : "3px solid transparent", }}>
            <img src={image} width='100%' />
            <IntensityRange sx={{ color: isSelected ? 'white' : 'black', backgroundColor: isSelected ? '#076EB0' : "white" }}>{num}</IntensityRange>
        </ImageDiv>


    </>
}
export default InputField