import { CustomRating, RateValue } from "../../../assets/styles/styled"

const RatingDisease: React.FC<{ setFieldValue: (name: string, value: number) => void, value: number, setValue: (value: number) => void, name: string }> = ({ setFieldValue, value, setValue, name }) => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const handleClick = (num: number) => {
        setFieldValue(name, num)
        setValue(num)
    }
    return <>


        <CustomRating >
            {numbers.map((item, index) =>
                <RateValue onClick={() => handleClick(item)} sx={{ backgroundColor: value >= item ? '#87C81A' : '#F0F1F4', borderRight: item == 10 ? 'none' : "1px solid #F0F1F4", color: value >= item ? 'white' : 'black', borderTopLeftRadius: item == 1 ? '12px' : 'none', borderBottomLeftRadius: item == 1 ? '12px' : 'none', borderTopRightRadius: item == 10 ? '12px' : 'none', borderBottomRightRadius: item == 10 ? '12px' : 'none' }} key={index}>{item}</RateValue>
            )}
        </CustomRating>
    </>
}
export default RatingDisease;


